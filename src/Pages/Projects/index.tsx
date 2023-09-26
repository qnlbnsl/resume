/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./style.css";
import SEO from "../../Components/SEO";
import { useParams } from "react-router-dom";

import {GetCategories, SearchQuery, GetPost} from '../../Utils/blogUtils'

type props = {
    pageType: "blog" | "search" | "category" | "tag";
};

function Projects({ pageType }: props) {
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");
    const [loader, setLoader] = useState(true);
    const [mainEntityName, setMainEntityName] = useState<string | null>(null);
    const [seoTitle, setSEOTitle] = useState<string | null>(null);
    const [blogPosts, setBlogPosts] = useState< | undefined>([]);
    const { slug } = useParams();

    // const categories = GetCategories();
    const categories = GetCategories();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlQuery = urlParams.get("q") || "";
        const loadData = async () => {
            if(!slug) return;
            console.log("slug", slug);
            console.log("pageType", pageType);
            if (pageType === "search") {
                // search posts by query
                try {
                    const posts = await SearchQuery(urlQuery);
                    // setBlogPosts(posts?.data?.data);
                } catch (error) {
                    setError(true);
                }
                setSEOTitle(`search results for ${urlQuery}`);
            }// else {
            //     let filterBy = {};
            //     let entityName;

            //     try {
            //         if (pageType === "category") {
            //             // if category detail, filter posts by category and load detail
            //             filterBy = { category_slug: slug };
            //             const category = await GetCategories(slug);
            //             if (!category || !category.data || !category.data.data) throw new Error("Category not found")
            //             entityName = category.data.data.name;
            //             setMainEntityName(entityName);
            //             setSEOTitle(`${pageType}: ${entityName}`);
            //         } else if (pageType === "tag") {
            //             // if tag detail, filter posts by tag and load detail
            //             filterBy = { tag_slug: slug };
            //             const tag = await butter.tag.retrieve(slug);
            //             if (!tag || !tag.data || !tag.data.data) throw new Error("Tag not found");
            //             entityName = tag.data.data.name;
            //             setMainEntityName(entityName);
            //             setSEOTitle(`${pageType}: ${entityName}`);
            //         } else {
            //             setSEOTitle(`all posts`);
            //         }

            //         // load all or filtered posts
            //         const posts = await butter.post.list(filterBy);
            //         setBlogPosts(posts?.data?.data);
            //     } catch (error) {
            //         setError(true);
            //     }
            // }
        };
        loadData();
        setQuery(urlQuery);
    }, [pageType, slug]);
    return (
        <>
            <SEO
                title={`${seoTitle}`}
                description={`${seoTitle}`}
            />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Projects</h1>
                        <p>{mainEntityName || query}</p>
                        {/* <p>{categories}</p> */}

                    </div>
                </div>
            </div>
            {/* <BlogPostsSection type={pageType} text={mainEntityName || query} />
            <BlogPostsList blogPosts={blogPosts} categories={categories} /> */}
        </>
    );
}

export default Projects;
