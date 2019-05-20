export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce2bfecc0d5896d658d1737',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fdhhao3k',
                  apiId: '3febcda2-fb79-4647-a67c-f8914f572306'
                },
                {
                  buildHookId: '5ce2bfec76ada7a4b63e4f9c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p9y9xtbi',
                  apiId: 'eb5bfac1-e388-4546-993d-ce4c1a76e7f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/terenas911/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-p9y9xtbi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
