import "./index.css";

export function Banner(props) {
  return (
    <div className="wrap-banner">
      <section
        className="banner"
        style={{
          backgroundImage: `url(${
            props.banner ? props.banner.bannerImage : ""
          })`,
        }}></section>
    </div>
  );
}

export default Banner;
