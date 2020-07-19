 import {NextPage} from 'next';
 import Link from 'next/link';

 const indexPage : NextPage =()=> {
     return (<>
        <nav>
            <ul>
              <li><a href="/">Hello</a></li>
              <li><a href="/">How</a></li>
              <li><a href="/">Are</a></li>
              <li><a href="/">You</a></li>
              <li><a href="/">Tonay</a></li>
            </ul>
          </nav>
          <main>
            <div className="list-post">
              <div className="post">
                <div className="img">
                  <img
                    src="https://labelbox.com/blog/content/images/2020/07/Labelbox-7-July-2020.png"
                    alt=""
                  />
                  <a href="" className="post-tag">Tag</a>
                </div>
                <div className="post-info">
                  <a href="" className="post-title">Title</a>
                </div>
              </div>
              <div className="post">
                <div className="img">
                  <img
                    src="https://labelbox.com/blog/content/images/2020/07/Labelbox-7-July-2020.png"
                    alt=""
                  />
                  <a href="" className="post-tag">Tag</a>
                </div>
                <div className="post-info">
                  <a href="" className="post-title">Title</a>
                </div>
              </div><div className="post">
                <div className="img">
                  <img
                    src="https://labelbox.com/blog/content/images/2020/07/Labelbox-7-July-2020.png"
                    alt=""
                  />
                  <a href="" className="post-tag">Tag</a>
                </div>
                <div className="post-info">
                  <a href="" className="post-title">Title</a>
                </div>
              </div><div className="post">
                <div className="img">
                  <img
                    src="https://labelbox.com/blog/content/images/2020/07/Labelbox-7-July-2020.png"
                    alt=""
                  />
                  <a href="" className="post-tag">Tag</a>
                </div>
                <div className="post-info">
                  <a href="" className="post-title">Title</a>
                </div>
              </div>
              </div>
          </main>
          
     <Link href="/abouts">Go to about page</Link></>)
 };

 export default indexPage;