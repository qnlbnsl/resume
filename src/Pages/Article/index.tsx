import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Butter from "buttercms";
import Spinner from 'react-bootstrap/Spinner';

import { butter } from "../../Utils/blogUtils/buttercms";

import SEO from "./../../Components/SEO";
import NotFound from "../../Components/NotFound";

import BlogWidget from "../../Components/BlogWidget";

import {GetCategories} from '../../Utils/blogUtils/GetCategories'


const placeholder = "/static/images/placeholder.png";



const Article = () => {
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(true);
    const [article, setArticle] = useState<Butter.Post<string, string>>();

    const { slug } = useParams();
    //   if (!slug) return (<NotFound />)
    const categories = GetCategories();

    useEffect(() => {
        const loadData = async () => {
            if (!slug) return;
            try {
                const article = await butter.post.retrieve(slug);
                if (!article || !article.data || !article.data.data)
                    throw new Error("Article not found");
                setArticle(article.data.data);
            } catch (error) {
                setError(true);
            }
            setLoader(false);
        };

        loadData();
    }, [slug]);

    if (error || !article) return <NotFound />;
    if (loader) return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );

    return (
        <>
            <SEO
                title={article.title}
                description={article.meta_description}
                image={article.featured_image}
            />

            <section id="blog-header" className="single-post-nav">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h2>{article.title}</h2>
                                <ul className="breadcrumb-nav">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>{article.title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-post">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="single-post">
                                <div className="single-post-meta">
                                    <h2 className="single-post-header">
                                        {article.title}
                                    </h2>
                                    <ul className="single-post-meta-info">
                                        <li>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#">
                                                <img
                                                    src={
                                                        article.author
                                                            .profile_image ||
                                                        placeholder
                                                    }
                                                    alt="#"
                                                />{" "}
                                                {article.author.first_name}{" "}
                                                {article.author.last_name}
                                            </a>
                                        </li>
                                        <li>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#">
                                                <i className="lni lni-calendar"></i>{" "}
                                                {new Date(
                                                    article.published
                                                ).toLocaleString()}
                                            </a>
                                        </li>
                                        <li>
                                            {article.tags.map((tag) => {
                                                return (
                                                    <Link
                                                        key={tag.slug}
                                                        to={`/blog/tag/${tag.slug}`}
                                                    >
                                                        <i className="lni lni-tag"></i>{" "}
                                                        {tag.name}{" "}
                                                    </Link>
                                                );
                                            })}
                                        </li>
                                    </ul>
                                </div>

                                {article.featured_image && (
                                    <div className="single-post-thumbnail">
                                        <img
                                            src={article.featured_image}
                                            alt={article.featured_image_alt}
                                        />
                                    </div>
                                )}

                                {article.body && (
                                    <div
                                        className="single-post-body"
                                        dangerouslySetInnerHTML={{
                                            __html: article.body,
                                        }}
                                    ></div>
                                )}
                            </div>
                        </div>

                        {/* <!-- Searchbox --> */}
                        <aside className="col-lg-4 col-md-12 col-12">
                            <BlogWidget categories={categories} />
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Article;
