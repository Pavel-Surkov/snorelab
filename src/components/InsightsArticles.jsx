import React from 'react';
import useFetch from '../hooks/useFetch';
//const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const InsightsArticles = () => {
  const posts = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?categories=10',
    {}
  );
  const tags = useFetch('https://snorelab.ux-mind.pro/wp-json/wp/v2/tags', {});

  if (!posts.data) {
    return (
      <section className="insights-articles">
        <div className="insights-articles__wrapper">
          <div className="container">
            <h2 className="title title_fade-s insights-articles__title">
              All articles
            </h2>
            <h3 className="title title_fade-l">Loading articles...</h3>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="insights-articles">
      <div className="insights-articles__wrapper">
        <div className="container">
          <h2 className="title title_fade-s insights-articles__title">
            All articles
          </h2>
          <ul className="insights-articles__list">
            {posts.data.map((post) => {
              return (
                <li className="insights-articles__item-wrapper" key={post.id}>
                  <div className="insights-articles__item">
                    <div className="order-lg-1 insights-articles__item-img">
                      <LazyLoadImage
                        src={post.acf.post_background_1x.url}
                        srcSet={`${post.acf.post_background_1x.url} 1x, ${
                          post.acf.post_background_2x
                            ? post.acf.post_background_2x.url
                            : ''
                        } 2x`}
                        alt=""
                      />
                    </div>
                    <div className="insights-articles__item-content">
                      <div className="order-lg-0 insights-articles__item-flags">
                        {/* This method adds flag links and adds commas correctly */}
                        {post.tags.map((tag, i, arr) => {
                          const tagData = tags.data.find(
                            (item) => item.id === tag
                          );

                          if (!tagData) {
                            return null;
                          }

                          return (
                            <span key={tagData.id}>
                              <a
                                className="link"
                                href={tagData.link}
                                dangerouslySetInnerHTML={{
                                  __html: tagData.name,
                                }}
                              ></a>
                              {i === arr.length - 1 ? '' : ' , '}
                            </span>
                          );
                        })}
                      </div>
                      <a href="#">
                        <h3 className="link title title_size-m insights-articles__item-title">
                          {post.title.rendered}
                        </h3>
                      </a>
                      {post.content.rendered && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.content.rendered,
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="insights-articles__show">
            <button className="btn btn-arrow insights-articles__show-btn">
              <div>Show more</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
