import React, { useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const  updateNews = async()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f92f93ac9804ae6b3bf2ca44371180a&page=${page}&pageSize=${props.pageSize}`;
 
    let data= await fetch(url);
    let parsedData= await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
   
  };
  useEffect(() => {
   
    updateNews(); 
    //eslint-disable-next-line
  },[])

  const fetchMoreData = async ()=>{  
    
  
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f92f93ac9804ae6b3bf2ca44371180a&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);
  let data= await fetch(url);
  let parsedData= await data.json();
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults)
  };

  
    return (

      <div>
      
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
      
       >
       <div className='container'>
           <div className="row">  
           {articles.map((element)=>{  
              return   <div className="col-md-3" key={element.url}> 
              <NewsItem title={element.title?element.title:" "}  imgurl={element.urlToImage} newsUrl={element.url} source={element.source.name} date={element.publishedAt}/>
            </div>
           })}
           </div>
         </div>
         
           </InfiniteScroll> 
         
    </div>
     
    );
  }

News.defaultProps={
  country:"in",
  pageSize: 16,
  category:"general"
  }
  
export default News;
