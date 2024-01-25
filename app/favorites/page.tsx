import { getAllFavBookmarks } from 'app/actions/bookmarks';
import { getTags } from 'app/actions/tags';

import Card from 'components/card';
import Header from 'components/header';

import { groupByDate } from 'lib/data';
import { cn } from 'lib/utils';

import { BookmarkModifiedType } from 'types/data';

export default async function Page() {
  const bookmarks = await getAllFavBookmarks();
  const tags = await getTags();
  const groupedBookmarks = groupByDate(bookmarks);

  return (
    <>
      <Header headerText="Favorites" />
      <div className="h-full border-r border-neutral-200 pb-24">
        {Object.keys(groupedBookmarks)
          .reverse()
          .map((groupKey: any, index: number) => {
            const bookmarksData: BookmarkModifiedType[] =
              groupedBookmarks[groupKey];
            return (
              <div className={cn(`flex flex-col w-full`)} key={index}>
                {bookmarksData.map(
                  (bookmark: BookmarkModifiedType, index: number) => (
                    <Card
                      last={index === bookmarksData.length - 1}
                      key={bookmark.id}
                      tags={tags}
                      data={bookmark}
                    />
                  )
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}