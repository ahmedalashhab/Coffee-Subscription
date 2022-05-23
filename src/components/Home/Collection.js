import image_gran_espresso_png_1 from "../assets/home/desktop/image-gran-espresso.png";
import image_planalto_png_1 from "../assets/home/desktop/image-planalto.png";
import image_piccollo_png_1 from "../assets/home/desktop/image-piccollo.png";
import image_danche_png_1 from "../assets/home/desktop/image-danche.png";

const Collection = () => {
  return (
    <section className="flex justify-center">
      <div className=" flex flex-col items-center justify-center all-width background-cream px-36">
        <div className="my-48">
          <h2 className="fraunces-900 text-[165px] our-collection translate-y-10 tracking-wider">
            our collection
          </h2>
          <div className="flex mx-auto above ">
            <div className="flex gap-10">
              <div className="flex flex-col">
                <div className="mx-auto">
                  <img
                    alt="coffee bag"
                    src={image_gran_espresso_png_1}
                    className="h-48 ml-4"
                  />
                </div>
                <span className="text-center fraunces-700 text-blue text-[24px] mt-16">
                  Gran Espresso
                </span>
                <p className="barlow-400 text-blue text-center mt-6">
                  Light and flavorful blend with cocoa and black pepper for an
                  intense experience
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mx-auto">
                  <img
                    alt="coffee bag"
                    src={image_planalto_png_1}
                    className="h-48 ml-4"
                  />
                </div>
                <span className="text-center fraunces-700 text-blue text-[24px] mt-16">
                  Planalto
                </span>
                <p className="barlow-400 text-blue text-center mt-6">
                  Brazilian dark roast with rich and velvety body, and hints of
                  fruits and nuts
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mx-auto">
                  <img
                    alt="coffee bag"
                    src={image_piccollo_png_1}
                    className="h-48 ml-4"
                  />
                </div>
                <span className="text-center fraunces-700 text-blue text-[24px] mt-16">
                  Piccollo
                </span>
                <p className="barlow-400 text-blue text-center mt-6">
                  Mild and smooth blend featuring notes of toasted almond and
                  dried cherry
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mx-auto">
                  <img
                    alt="coffee bag"
                    src={image_danche_png_1}
                    className="h-48 ml-4"
                  />
                </div>
                <span className="text-center fraunces-700 text-blue text-[24px] mt-16">
                  Danche
                </span>
                <p className="barlow-400 text-blue text-center mt-6">
                  Ethiopian hand-harvested blend densely packed with vibrant
                  fruit notes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
