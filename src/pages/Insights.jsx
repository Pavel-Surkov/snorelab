import React, { useState, useEffect } from 'react';
//const { createElement, render } = wp.element;
import { InsightsTabs } from '../components/InsightsTabs';
import { InsightsFeautured } from '../components/InsightsFeautured';
import { InsightsArticles } from '../components/InsightsArticles';
import { InsightsAssess } from '../components/InsightsAssess';
import useFetch from '../hooks/useFetch';

import stop_bang from '@/images/stop-bang.png';
import stop_bang_2x from '@/images/stop-bang@2x.png';
import screening from '@/images/screening.png';
import screening_2x from '@/images/screening@2x.png';

const insightsAssessArticles = [
  {
    title: 'Answer the Stop-BANG Questionnaire',
    link: 'stopbang.html',
    image: { '1x': stop_bang, '2x': stop_bang_2x },
  },
  {
    title: 'Screening dor Sleep Apnea: Epworth Sleepiness Scale',
    link: 'epworth.html',
    image: { '1x': screening, '2x': screening_2x },
  },
];

export const Insights = () => {
  const [currentPosts, setCurrentPosts] = useState(null);
  const [tagsArr, setTagsArr] = useState(null);
  const [activeTag, setActiveTag] = useState({ text: 'all', id: 111 });

  const posts = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?categories=10',
    {}
  );
  const tags = useFetch('https://snorelab.ux-mind.pro/wp-json/wp/v2/tags', {});

  useEffect(() => {
    if (!currentPosts) {
      return;
    } else if (activeTag.id === 111) {
      setCurrentPosts(posts.data);
      return;
    }

    const filteredPosts = posts.data.filter((post) => {
      return post.tags.indexOf(activeTag.id) >= 0;
    });

    setCurrentPosts(filteredPosts);
  }, [activeTag]);

  useEffect(() => {
    if (tags.data) {
      const allTags = tags.data.concat();

      allTags.reverse().push({ id: 111, name: 'All' });
      allTags.reverse();

      setTagsArr(allTags);
    }
  }, [tags.data]);

  useEffect(() => {
    if (posts.data) {
      setCurrentPosts(posts.data);
    }
  }, [posts.data]);

  return (
    <main className="insights">
      <InsightsTabs
        tags={{ state: tagsArr, update: setTagsArr }}
        activeTag={{ state: activeTag, update: setActiveTag }}
      />
      <InsightsFeautured />
      <InsightsArticles
        posts={{ state: currentPosts, update: setCurrentPosts }}
        tags={{ state: tags }}
      />
      <InsightsAssess
        light={true}
        titleClass="title_size-l"
        titleText="Assess your sleep apnea risk"
        articles={insightsAssessArticles}
      />
    </main>
  );
};
