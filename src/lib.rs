extern crate ray_tracer;

use ray_tracer::camera;
use ray_tracer::camera::Camera;
use ray_tracer::geometry::Cube;
use ray_tracer::geometry::Rectangle;
use ray_tracer::geometry::Sphere;
use ray_tracer::mat4::Mat4;
use ray_tracer::material::Dielectric;
use ray_tracer::material::DiffuseLight;
use ray_tracer::material::ImageTexture;
use ray_tracer::material::Isotropic;
use ray_tracer::material::Lambertian;
use ray_tracer::material::Metal;
use ray_tracer::material::Texture;
use ray_tracer::ray;
use ray_tracer::ray::Hit;
use ray_tracer::render;
use ray_tracer::sprite::Sprite;
use ray_tracer::vec3;
use ray_tracer::volume::ConstantMedium;
use ray_tracer::material::SolidColor;

use ray_tracer::optimize::AxisAlignedBoundingBox;
use ray_tracer::optimize::Bound;
use ray_tracer::optimize::BoundingVolumeHierarchyNode;

use wasm_bindgen::prelude::wasm_bindgen;

use rand::thread_rng;
use rand::Rng;

use std::sync::Arc;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn init_panic_hook() {
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub struct Vec3(vec3::Vec3);

#[wasm_bindgen]
impl Vec3 {
    pub fn new(x: f64, y: f64, z: f64) -> Self {
        Self(vec3::Vec3::new(x, y, z))
    }

    pub fn x(&self) -> f64 {
        self.0.x()
    }

    pub fn y(&self) -> f64 {
        self.0.y()
    }

    pub fn z(&self) -> f64 {
        self.0.z()
    }
}

#[wasm_bindgen]
pub struct Ray(ray::Ray);

#[wasm_bindgen]
impl Ray {
    pub fn new(origin: Vec3, direction: Vec3) -> Self {
        Self(ray::Ray::new(origin.0, direction.0))
    }
}

#[wasm_bindgen]
pub struct PerspectiveCamera(camera::PerspectiveCamera);

#[wasm_bindgen]
impl PerspectiveCamera {
    pub fn new(
        eye: Vec3,
        center: Vec3,
        up: Vec3,
        fov: f64,
        aspect: f64,
        focusDistance: f64,
        lensRadius: f64,
    ) -> Self {
        Self(camera::PerspectiveCamera::new(
            eye.0,
            center.0,
            up.0,
            fov,
            aspect,
            focusDistance,
            lensRadius,
        ))
    }

    pub fn ray(&self, u: f64, v: f64) -> Ray {
        Ray(self.0.ray(u, v))
    }
}

#[wasm_bindgen]
pub struct Bvh(BoundingVolumeHierarchyNode<AxisAlignedBoundingBox>);

#[wasm_bindgen]
pub fn color(ray: &Ray, world: &Bvh, depth: usize) -> Vec3 {
    Vec3(render::color(&ray.0, &world.0, depth))
}

#[wasm_bindgen]
pub fn finalScene() -> Bvh {
    use ray_tracer::vec3::Vec3;

    let mut generator = thread_rng();

    // 地面凹凸不平的淡绿色方块地板
    let groundMaterial = Arc::new(Lambertian::new(Vec3::new(0.48, 0.83, 0.53)));

    let boxCountPerSide = 20;
    let mut cubes: Vec<Arc<dyn Bound<AxisAlignedBoundingBox>>> = vec![];

    for i in 0..boxCountPerSide {
        for j in 0..boxCountPerSide {
            let w = 100.0;
            let x0 = -1000.0 + i as f64 * w;
            let y0 = 0.0;
            let z0 = -1000.0 + j as f64 * w;
            let x1 = x0 + w;
            let y1 = generator.gen_range(1.0, 101.0);
            let z1 = z0 + w;

            let cubeGeometry: Vec<Arc<dyn Bound<AxisAlignedBoundingBox>>> =
                Cube::new(x1 - x0, y1 - y0, z1 - z0)
                    .into_iter()
                    .map(|v| Arc::new(v) as Arc<dyn Bound<AxisAlignedBoundingBox>>)
                    .collect();
            let cubeGeometry = BoundingVolumeHierarchyNode::new(cubeGeometry).unwrap();
            let cube = Arc::new(
                Sprite::builder()
                    .geometry(Arc::new(cubeGeometry))
                    .material(groundMaterial.clone())
                    .transform(Mat4::translation(Vec3::new(
                        (x0 + x1) / 2.0,
                        (y0 + y1) / 2.0,
                        (z0 + z1) / 2.0,
                    )))
                    .build(),
            );

            cubes.push(cube);
        }
    }
    let cubes: Arc<dyn Bound<AxisAlignedBoundingBox>> =
        Arc::new(BoundingVolumeHierarchyNode::new(cubes).unwrap());

    let lightMaterial = Arc::new(DiffuseLight::new(Vec3::new(7.0, 7.0, 7.0)));
    let light = Arc::new(
        Sprite::builder()
            .geometry(Rectangle::new(300.0, 265.0).into())
            .material(lightMaterial)
            .transform(
                Mat4::translation(Vec3::new(273.0, 554.0, 279.5))
                    .multiplied(&Mat4::rotation(90.0_f64.to_radians(), Vec3::ex())),
            )
            .build(),
    );

    // 左上角的动态模糊，我还没写动态模糊
    let movingSphereMaterial = Arc::new(Lambertian::new(Vec3::new(0.7, 0.3, 0.1)));
    let movingSphere = Arc::new(
        Sprite::builder()
            .geometry(Sphere::new(50.0).into())
            .material(movingSphereMaterial)
            .transform(Mat4::translation(Vec3::new(400.0, 400.0, 200.0)))
            .build(),
    );

    // 正中间的玻璃球
    let glassSphere = Arc::new(
        Sprite::builder()
            .geometry(Sphere::new(50.0).into())
            .material(Dielectric::new(1.5).into())
            .transform(Mat4::translation(Vec3::new(260.0, 150.0, 45.0)))
            .build(),
    );
    // 书上的玻璃球不仅有折射，还有表面反射，我不知道他是怎么做出来的

    // 右下角的铁球
    let metalSphere = Arc::new(
        Sprite::builder()
            .geometry(Sphere::new(50.0).into())
            .material(Metal::new(Vec3::new(0.8, 0.8, 0.9), 1.0).into())
            .transform(Mat4::translation(Vec3::new(0.0, 150.0, 145.0)))
            .build(),
    );

    // 不太理解这个东西，书上说是subsurface material，但是最后渲染出来是毛玻璃球的感觉，并不是书上那种陶瓷的感觉
    let blueSphereMaterial = Arc::new(Dielectric::new(1.5));
    let blueSphereSurface = Arc::new(
        Sprite::builder()
            .geometry(Sphere::new(70.0).into())
            .material(blueSphereMaterial)
            .transform(Mat4::translation(Vec3::new(360.0, 150.0, 145.0)))
            .build(),
    );
    let blueSphereMedium = Arc::new(
        Sprite::builder()
            .geometry(ConstantMedium::new(Sphere::new(70.0 - 1e-6).into(), 0.03).into())
            .material(Isotropic::new(Vec3::new(0.2, 0.4, 0.9)).into())
            .transform(Mat4::translation(Vec3::new(360.0, 150.0, 145.0)))
            .build(),
    );

    // 覆盖全景的雾，在靠近灯光的地方可以看到类似丁达尔效应的感觉（？）但是我没有
    let fog = Arc::new(
        Sprite::builder()
            .geometry(ConstantMedium::new(Sphere::new(5000.0).into(), 0.0001).into())
            .material(Isotropic::new(Vec3::new(1.0, 1.0, 1.0)).into())
            .build(),
    );

    // 左中的地球
    // let image = Arc::new(image::open("./earthmap.jpg").unwrap());
    // let mapping = move |uv: &(f64, f64)| -> Vec3 {
    //     let image = image.clone();
    //     let buffer = image.as_rgb8().unwrap();
    //     let (u, v) = uv;
    //     let pixel = buffer.get_pixel(
    //         (u * buffer.width() as f64) as u32,
    //         ((1.0 - v) * buffer.height() as f64) as u32,
    //     );
    //     return Vec3::new(
    //         pixel[0] as f64 / 255.0,
    //         pixel[1] as f64 / 255.0,
    //         pixel[2] as f64 / 255.0,
    //     );
    // };
    // let earthTexture: Arc<dyn Texture> = Arc::new(ImageTexture::new(mapping));
    let earthTexture: Arc<dyn Texture> = Arc::new(SolidColor::new(Vec3::new(0.0, 0.0, 0.5)));
    let earthMaterial = Arc::new(Lambertian::new(earthTexture));
    let earth = Arc::new(
        Sprite::builder()
            .geometry(Sphere::new(100.0).into())
            .material(earthMaterial)
            .transform(Mat4::translation(Vec3::new(400.0, 200.0, 400.0)))
            .build(),
    );

    // 右上角的泡沫塑料
    let whiteMaterial = Arc::new(Lambertian::new(Vec3::new(0.73, 0.73, 0.73)));
    let mut spheres: Vec<Arc<dyn Bound<AxisAlignedBoundingBox>>> = vec![];

    for _ in 0..1000 {
        let x = generator.gen_range(0.0, 165.0);
        let y = generator.gen_range(0.0, 165.0);
        let z = generator.gen_range(0.0, 165.0);

        let sphere = Arc::new(
            Sprite::builder()
                .geometry(Sphere::new(10.0).into())
                .material(whiteMaterial.clone())
                .transform(Mat4::translation(Vec3::new(
                    x - 100.0,
                    y + 270.0,
                    z + 395.0,
                )))
                .build(),
        );
        spheres.push(sphere);
    }
    let spheres: Arc<dyn Bound<AxisAlignedBoundingBox>> =
        Arc::new(BoundingVolumeHierarchyNode::new(spheres).unwrap());

    let res: Vec<Arc<dyn Bound<AxisAlignedBoundingBox>>> = vec![
        cubes,
        light as Arc<dyn Bound<AxisAlignedBoundingBox>>,
        movingSphere,
        glassSphere,
        metalSphere,
        blueSphereSurface,
        blueSphereMedium,
        earth,
        fog,
        spheres,
    ];

    return Bvh(BoundingVolumeHierarchyNode::new(res).unwrap());
}
