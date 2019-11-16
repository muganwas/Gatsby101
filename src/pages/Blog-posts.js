import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Navigation } from '../components';
import { 
    PageContainer,
    Header1,
    Header3,
    Header4,
    DefaultDiv,
    DefaultSpan,
    DefaultParagraph
} from '../styles';

const BlogPosts = ({ data }) => {
    //console.log(data)
    const countTitle = parseInt(data.allMarkdownRemark.totalCount) === 1 ?
    "Post" :
    "Posts";
    return (
        <PageContainer>
            <DefaultDiv>
                <Navigation />
                <Header1>
                    Amazing Pandas Eating Things
                </Header1>
                <Header4>{ data.allMarkdownRemark.totalCount } { countTitle }</Header4>
                { data.allMarkdownRemark.edges.map(({ node }) => (
                    <DefaultDiv key={ node.id }>
                        <Header3>
                            { node.frontmatter.title }{ " " }
                            <DefaultSpan>
                                — { node.frontmatter.date }
                            </DefaultSpan>
                        </Header3>
                        <DefaultParagraph>{ node.excerpt }</DefaultParagraph>
                    </DefaultDiv>
                )) }
            </DefaultDiv>
        </PageContainer>
    )
}

BlogPosts.propTypes = {
    data: PropTypes.object.isRequired
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}){
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`

export default BlogPosts;
