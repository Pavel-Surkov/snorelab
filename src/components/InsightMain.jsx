import React from 'react';
//const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import insight_1 from '../images/insight-img-1.png';
import insight_1_2x from '../images/insight-img-1@2x.png';

export const InsightMain = ({ data }) => {
  if (!data) {
    return (
      <section className="insight-main">
        <div className="insight-main__wrapper">
          <div className="container">
            <h2
              className="title title_size-l"
              style={{ marginBottom: '100px' }}
            >
              Loading...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="insight-main">
      <div className="insight-main__wrapper">
        <div className="container">
          <div className="insight-main__note">
            <div className="insight-main__flags">
              <span>
                <a className="link" href="#">
                  Solutions
                </a>
              </span>
            </div>
            <h1 className="title title_size-m insight-main__title">
              {data.title.rendered}
            </h1>
            <p>{data.acf.post_top_description}</p>
          </div>
          <div className="insight-main__intro">
            <a href="#" className="insight-main__intro-play" aria-label="play">
              <LazyLoadImage
                src={data.acf.post_content[0].post_video_preview_1x.url}
                srcSet={
                  data.acf.post_content[0].post_video_preview_2x.url
                    ? `${data.acf.post_content[0].post_video_preview_1x.url} 1x, ${data.acf.post_content[0].post_video_preview_2x.url} 2x`
                    : null
                }
                alt=""
              />
              <svg
                data-img="play-btn"
                width="113"
                height="113"
                viewBox="0 0 113 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.7">
                  <path
                    d="M56.5 0.9375C25.8166 0.9375 0.9375 25.8166 0.9375 56.5C0.9375 87.1834 25.8166 112.062 56.5 112.062C87.1834 112.062 112.062 87.1834 112.062 56.5C112.062 25.8166 87.1834 0.9375 56.5 0.9375ZM56.5 102.637C31.0256 102.637 10.3633 81.9744 10.3633 56.5C10.3633 31.0256 31.0256 10.3633 56.5 10.3633C81.9744 10.3633 102.637 31.0256 102.637 56.5C102.637 81.9744 81.9744 102.637 56.5 102.637Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M76.8523 55.669L49.7655 35.9741C49.6173 35.8664 49.4421 35.8019 49.2594 35.7878C49.0767 35.7736 48.8937 35.8103 48.7306 35.8938C48.5675 35.9772 48.4307 36.1042 48.3353 36.2607C48.24 36.4172 48.1898 36.597 48.1904 36.7802V76.1701C48.1907 76.3529 48.2414 76.5322 48.337 76.6881C48.4325 76.844 48.5691 76.9706 48.7319 77.0539C48.8947 77.1372 49.0773 77.1741 49.2596 77.1604C49.442 77.1466 49.617 77.0829 49.7655 76.9762L76.8523 57.2689C76.9802 57.1784 77.0846 57.0585 77.1567 56.9193C77.2287 56.7801 77.2663 56.6257 77.2663 56.469C77.2663 56.3122 77.2287 56.1578 77.1567 56.0186C77.0846 55.8794 76.9802 55.7595 76.8523 55.669V55.669Z"
                    fill="#E6E6E6"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="insight-text">
            {data.acf.post_content[1].post_text.map((textItem) => {
              return (
                <p key={textItem.post_text_paragraph.slice(0, 10)}>
                  {textItem.post_text_paragraph}
                </p>
              );
            })}
          </div>
          <div className="insight-img">
            <img
              src={data.acf.post_content[2].post_image_1x.url}
              srcSet={`${data.acf.post_content[2].post_image_1x.url} 1x, ${data.acf.post_content[2].post_image_2x.url} 2x`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
