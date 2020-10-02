import {registry} from 'foo/modules/registry';
import type {ComponentDef} from 'bar/page';
import { Suspense, useEffect, useState } from 'react';

import {Loading} from '../components/fallback';

export default function Home() {
  const [pageData, setPageData] = useState<ComponentDef[]|null>(null);

  useEffect(() => {
    import('bar/page').then((module) => {
      setPageData(module.page)
    })
  },[])

  if (!pageData) {
    return <Loading />;
  }
  return (
    <Suspense fallback={<Loading />}>
      {pageData.map((c) => {
        const Component = registry[c.component];
        return <Component key={c.id} {...c.props} />
      })}
      </Suspense>
  )
}
