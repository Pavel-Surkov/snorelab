import React from 'react';
//const { createElement, render } = wp.element;
import { homeInsights } from '../helpers/variables';
import useFetch from '../hooks/useFetch';

export const HomeInsights = () => {
  const posts = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?categories=9',
    {}
  );
  const tags = useFetch('https://snorelab.ux-mind.pro/wp-json/wp/v2/tags', {});

  if (!posts.data || !tags.data) {
    return (
      <section className="home-insights">
        <div className="home-insights__wrapper">
          <div className="container">
            <h2 className="title title_fade title_size-m home-insights__title">
              Snoring insights
            </h2>
            <div className="home-insights__container">
              <h2 className="title title_fade title_size-s">Loading...</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="home-insights">
      <div className="home-insights__wrapper">
        <div className="container">
          <h2 className="title title_fade title_size-m home-insights__title">
            Snoring insights
          </h2>
          <div className="home-insights__container">
            {posts.data.map((post) => {
              return (
                <div className="home-insights__item" key={post.id}>
                  <div className="home-insights__item-content">
                    <div className="home-insights__item-flags">
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
                              dangerouslySetInnerHTML={{ __html: tagData.name }}
                            ></a>
                            {i === arr.length - 1 ? '' : ', '}
                          </span>
                        );
                      })}
                    </div>
                    <a
                      className="link home-insights__item-title"
                      href={post.link}
                    >
                      <h4 className="title">{post.title.rendered}</h4>
                    </a>
                    {post.content.rendered && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered,
                        }}
                      ></div>
                    )}
                  </div>
                  <img
                    src={post.acf.post_background_1x.url}
                    srcSet={`${post.acf.post_background_1x.url} 1x, ${
                      post.acf.post_background_2x
                        ? post.acf.post_background_2x.url
                        : ''
                    } 2x`}
                    alt=""
                  />
                  <div className="home-insights__item-fade" />
                </div>
              );
            })}
          </div>
          <div className="home-insights__read-more">
            <a className="link btn btn-arrow" href="insights.html">
              <div>Read more</div>
            </a>
          </div>
        </div>
        <svg
          data-svg="decorative"
          width="379"
          height="371"
          viewBox="0 0 379 371"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="189.5" cy="185.5" rx="189.5" ry="185.5" fill="#17A2FF" />
        </svg>
      </div>
    </section>
  );
};
