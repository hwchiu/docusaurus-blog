import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="hwchiu/blog-comment"
      repoId="MDEwOlJlcG9zaXRvcnkzNjc1NTIyODM="
      category="General"
      categoryId="DIC_kwDOFehnG84CZ_ID"
      mapping="url"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-TW"
      loading="lazy"
      crossorigin="anonymous"
    />
  );
}
