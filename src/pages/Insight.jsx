import React, { useState, useEffect } from 'react';
import usePost from '../hooks/usePost';
//const { createElement, render, useEffect } = wp.element;
import { InsightMain } from '../components/InsightMain';
import { InsightHowUse } from '../components/InsightHowUse';
import { InsightAdvice } from '../components/InsightAdvice';
import { InsightStudies } from '../components/InsightStudies';
import { InsightReview } from '../components/InsightReview';
import { InsightDownload } from '../components/InsightDownload';
import { References } from '../components/References';
import { shareInsightLinks } from '../helpers/variables';
import { Share } from '../components/Share';
import { InsightsRelative } from '../components/InsightsRelative';
import { calculateTextWidth } from '../helpers/functions';

export const Insight = () => {
  const [currentPath, setCurrentPath] = useState(window.location.href);
  const [currentSlug, setCurrentSlug] = useState(null);

  const post = usePost(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts',
    'introducing-our-new-app-snoregym', // currentSlug
    {}
  );

  useEffect(() => {
    const reversedPath = currentPath.split('/').reverse();

    const slug = reversedPath[0] === '' ? reversedPath[1] : reversedPath[0];

    setCurrentSlug(slug);
  }, [currentPath]);

  useEffect(() => {
    window.addEventListener('load', calculateTextWidth);
    window.onresize = () => calculateTextWidth();

    return () => {
      window.addEventListener('load', calculateTextWidth);
    };
  }, []);

  return (
    <main className="insight">
      <div className="insight-wrapper">
        <InsightMain data={post.data} />
        <InsightHowUse />
        <InsightAdvice />
        <InsightStudies />
        <InsightReview />
        <InsightDownload />
        <References />
        <Share title="Share this article" links={shareInsightLinks} />
        <InsightsRelative />
      </div>
    </main>
  );
};
