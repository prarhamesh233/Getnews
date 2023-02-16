import React  from 'react'

const NewsItem =(props)=> {
 
   let  {title,discription,imgurl,newsUrl,source,date}=props;  
   
    return (
      <div> 
         <a href={newsUrl} target="_blank" rel="noreferrer" className="card my-3" >
         <img src={!imgurl?"https://cdn.wionews.com/sites/default/files/styles/story_page/public/2023/02/09/331153-untitled-design-17.png?imwidth=1080":imgurl} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">{title}...</h5>
          <p className="card-text">{discription}...</p>
          <p className="card-text"><small className="text-muted"><strong>{source}</strong> on {new Date(date).toDateString()}</small></p>
        </div>
      </a>
      </div>
    )
  }


export default NewsItem
