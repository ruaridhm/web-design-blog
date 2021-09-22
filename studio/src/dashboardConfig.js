export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "614b895a9da7760e6bcb24be",
                  title: "Sanity Studio",
                  name: "web-design-blog-studio",
                  apiId: "d0b0232a-720c-4f08-8a39-e52f3009541d",
                },
                {
                  buildHookId: "614b895abb707c4f58a8a59b",
                  title: "Blog Website",
                  name: "web-design-blog",
                  apiId: "64405f48-13be-4786-8b05-59509e5360fc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ruaridhm/web-design-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://web-design-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
