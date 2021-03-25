/* Theme configuration for index API (sample-api.yaml) redoc */

// let IndexTheme = JSON.parse(JSON.stringify(RedocTheme));
const IndexTheme = {
  theme: {
    colors: {
      primary: {
        main: '#F9690E',
        light: '#FAA945',
      },
      text: {
        primary: '#33241F',
      },
    },
    typography: {
      fontFamily: 'Lato, sans-serif',
      fontWeightBold: '700',
      headings: {
        fontFamily: 'Lexend, sans-serif',
      },
      code: {
        fontFamily: 'Anonymous Pro, monospace',
        fontWeight: '700',
        color: '#C93756',
        backgroundColor: '#f6ebd4',
      },
      links: {
        color: '#705697',
        hover: '#6f42c1',
      },
    },
    logo: {
      gutter: '1.5rem',
    },
    sidebar: {
      backgroundColor: '#f9f1e1',
    },
    rightPanel: {
      backgroundColor: '#fef8ec',
      textColor: '#33241F',
    },
  }
};

Redoc.init(
  'sample-api.yaml', 
  IndexTheme, 
  document.getElementById('redoc-container'),
  () => {
    const jsonExamples = document.getElementsByClassName('redoc-json');
    for (e of jsonExamples) {
      e.parentNode.classList.add('json-example');
    }

    const contentTypeLabels = document.evaluate(
      "//span[contains(., 'Content type')]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null,
    );
    for ( var i=0 ; i < contentTypeLabels.snapshotLength; i++ ) {
      contentTypeLabels.snapshotItem(i).parentNode.classList.add('content-type');
    }
  },
);
