export function getTop5Posts(posts)
{
    const mostvisiteds = posts.sort(function (a, b) {
                return b.visits - a.visits;
            }).slice(0, 5);
    return mostvisiteds;
}