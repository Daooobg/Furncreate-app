import classes from './Gallery.module.css';

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      <div className={classes["img-container"]}>
        <img
          src="/assets/gallery/behzad-ghaffarian-nhWgZNV85LQ-unsplash.jpg"
          alt="table with chairs"
          className={classes['gallery-img']}
        />
         <img
          src="/assets/gallery/brydon-mccluskey-wH0FG219FE8-unsplash.jpg"
          alt="table with sofas"
          className={classes['gallery-img']}
        />
         <img
          src="/assets/gallery/spacejoy-KJUGhE9ojro-unsplash.jpg"
          alt="spacejoy-KJUGhE9ojro-unsplash"
          className={classes['gallery-img']}
        />
        <img
          src="/assets/gallery/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg"
          alt="deborah-cortelazzi"
          className={classes['gallery-img']}
        />
        <img
          src="/assets/gallery/don-kaveen-NFbwes_e-jI-unsplash.jpg"
          alt="don-kaveen-NFbwes_e-jI-unsplash"
          className={classes['gallery-img']}
        />
        <img
          src="/assets/gallery/francesca-tosolini-6japTIjUQoI-unsplash.jpg"
          alt="francesca-tosolini-6japTIjUQoI-unsplash"
          className={classes['gallery-img']}
        />
        <img
          src="/assets/gallery/francesca-tosolini-DmOhItSo49k-unsplash.jpg"
          alt="francesca-tosolini-DmOhItSo49k-unsplash"
          className={classes['gallery-img']}
        />
         <img
          src="/assets/gallery/francesca-tosolini-lLDh9JppH2c-unsplash.jpg"
          alt="francesca-tosolini-lLDh9JppH2c-unsplash"
          className={classes['gallery-img']}
        />
         <img
          src="/assets/gallery/mateo-fernandez-XTC538P_eWk-unsplash.jpg"
          alt="mateo-fernandez-XTC538P_eWk-unsplash"
          className={classes['gallery-img']}
        />
        <img
          src="/assets/gallery/sidekix-media-0sDzRgrN_pI-unsplash.jpg"
          alt="sidekix-media-0sDzRgrN_pI-unsplash"
          className={classes['gallery-img']}
        />
        {/* <img
          src="/assets/gallery/spacejoy-KJUGhE9ojro-unsplash.jpg"
          alt="spacejoy-KJUGhE9ojro-unsplash"
          className={classes['gallery-img']}
        /> */}

      </div>
      {/* <img src="https://drive.google.com/uc?export=view&id=1gXvoPGXeSaEs12NPh353Dwd1FIxKB8ql" alt="" /> */}
    </section>
  );
};

export default Gallery;
