const siteUrl = 'https://hifzakhalid.com';

export default function sitemap() {
    return ['/', '/work', '/about', '/ux/mcb-money-map'].map((path) => ({
        url: `${siteUrl}${path}`,
        lastModified: new Date()
    }));
}
