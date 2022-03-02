const axios = require('axios')
const cheerio = require('cheerio')

const getPostTitles = async () => {
  try {
    const { data } = await axios.get(
      // 'https://www.reutersagency.com/feed/?taxonomy=best-topics&post_type=best',
      // 'https://www.reuters.com/world/',
      'https://www.reuters.com/site-search/?query=ukraine',
      {
        // headers: { "Access-Control-Allow-Origin": "*" },
        // mode: 'no-cors'
      }
    )

    // console.log(data);

    const $ = cheerio.load(data)
    const postTitles = []

    // const bla = $('#main-content')
    // const blu = $(bla).text()
    // console.log(blu);

    const container = $('div[class^="search-results__item_"]')
    // console.log($(container).find('li'));

    $(container).find('li').each((_idx, el) => {
      console.log(el);
      // const postTitle = $(el).text()
      // if (postTitle.includes('a')) {
      //   postTitles.push(postTitle)
      // }
    })

    let uniquePostTitles = [...new Set(postTitles)];
    return uniquePostTitles
  } catch (error) {
    throw error
  }
}
getPostTitles()
  // .then((postTitles) => console.log(postTitles));

// export default getPostTitles
