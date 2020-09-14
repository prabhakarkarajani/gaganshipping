import Layout from '../../components/newlayout';
import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { posts } from '../post';
import _ from 'lodash';

export default () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 500,
            behavior: 'smooth'
          });
    },[])
    const router = useRouter()
    function renderer(config) {
        if (typeof config.component !== "undefined") {
            return React.createElement(
                config.component,
                {
                    src: config.src,
                    className: config.style
                },
                config.children &&
                (typeof config.children === "string"
                    ? config.children
                    : config.children.map(c => renderer(c)))
            );
        }
    }
    const post = posts[router.query.id];
    return (
        <React.Fragment>
            <Layout>
                <div className="banner1 ">
                    <img className="bottom-0" src="https://images.unsplash.com/photo-1558898417-f264cec8a9fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80" height="500" />
                    <div className="banner_title">
                        <h1 className="p-4">Our Services</h1>
                        <span className="p-2 service-types">
                            PORT AGENCY
                        <svg viewBox="0 0 20 20" fill="currentColor" class="star w-6 h-6"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        CHARTERING
                        <svg viewBox="0 0 20 20" fill="currentColor" class="star w-6 h-6"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        CREW HANDLING
                        <svg viewBox="0 0 20 20" fill="currentColor" class="star w-6 h-6"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        HUSBANDRY
                        <svg viewBox="0 0 20 20" fill="currentColor" class="star w-6 h-6"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        BUNKERING
                            </span>
                    </div>
                </div>
                <div class="flex w-3/4 m-auto mb-10">
                <div className="flex-none  text-center border-double border-r-2  py-2 m-2 w-64">
                    <ul>
                        {Object.keys(posts).map((value, index) => {
                            return (
                                <li key={index} className={`p-4  ${(router.query.id == value ? 'bg-blue-800 text-white' : ' text-gray-600')}`}>
                                    <Link href='/service/[id]' as={'/service/' + value}>
                                        <a className="uppercase ">{value} </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div class="flex-grow text-gray-600 px-4 py-2 m-2">
                {(post)? (
                    <div>

                    {/* <h1>{post.component}</h1> */}
                    <div className="card-container">
                        {!_.isString(post.children) ? post.children.map(config => renderer(config)) : (<p>{post.children}</p>)}
                    </div>
                </div>
                ) : null}
                </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}