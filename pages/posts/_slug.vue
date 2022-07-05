<template>
  <div id="blogpost">
    <Header name="blog" />
    <header>
      <div class="hero" :style="splash">
        <div class="hero-text"></div>
      </div>
    </header>

    <section>
      <div class="container">
        <div class="head">
          <div class="heading">{{ meta.title }}</div>
          <div class="created">{{ meta.created }} - {{ meta.author }}</div>
          <div class="updated">{{ meta.updated }}</div>
        </div>

        <div class="content">
          <div v-html="html"></div>
        </div>

        <div class="text-center">
          <div class="tagList">
            <p>
              <span v-for="(voter, i) in meta.tags" :key="i" class="tags">{{
                voter
              }}</span>
            </p>
          </div>
        </div>

        <div class="text-center">
          <nuxt-link to="/posts/" class="btn"> Back to overview </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
export default {
  async asyncData({ params }) {
    let post = await import(`~/blog/${params.slug}.md`);
    return {
      meta: post.attributes,
      html: post.html,
      singlePostComponent: post.component,
      splash:
        post.attributes && post.attributes.cover && post.attributes.cover.image
          ? `background-image: url(images/blog/${post.attributes.cover.image});`
          : `background-image: url(images/blog/default.jpg);`,
    };
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.meta.title,
        },
      ],
    };
  },
  components: { Header },
};
</script>

<style>
#blogpost section {
  color: #44494f;
}
#blogpost section .heading {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 55px;
  line-height: 75px;
  letter-spacing: -0.05em;
  line-height: 1.25;
}
@media (max-width: 991px) {
  #blogpost section .heading {
    font-size: 2em;
  }
}
#blogpost section .head {
  margin-bottom: 2em;
}
#blogpost section .head .coverimage {
  margin-top: 1em;
  border-radius: 5px;
  max-height: 200px;
  overflow: hidden;
}
#blogpost section .head .coverimage img {
  max-width: 100%;
  margin-top: -10%;
}
#blogpost section .created {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.05em;
  line-height: 1.25;
}
#blogpost section .content h1,
#blogpost section .content h2,
#blogpost section .content h3 {
  margin-top: 1em;
  margin-bottom: 0.3em;
  letter-spacing: -0.05em;
  font-weight: 500;
  color: #44494f;
}
#blogpost section .content h1 {
  font-size: 2rem;
}
#blogpost section .content h2 {
  font-size: 1.6rem;
}
#blogpost section .content h3 {
  font-size: 1.4rem;
}
#blogpost section .content a {
  color: #726fb9;
  text-decoration: none;
  background-color: transparent;
  font-weight: 400;
  transition: all 0.3s;
}
#blogpost section .content a:hover {
  color: #fed136;
  text-decoration: none;
}
#blogpost section .content img {
  max-width: 100%;
}
#blogpost section .content table {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  border-spacing: 0 0;
}
#blogpost section .content table th {
  background-color: #44494f;
  border: #44494f 1px solid;
  color: #fff;
  padding: 0.5rem;
}
#blogpost section .content table td {
  border: #cdcdcd 1px solid;
  padding: 0.5rem;
}
#blogpost section .content table tr:hover {
  background-color: #eee;
}
#blogpost section .content,
#blogpost section .content p {
  font-size: 1.08em;
  font-weight: 300;
  line-height: 1.5;
  color: #797979;
}
#blogpost section code,
#blogpost section pre {
  color: #f8f8f2;
  background: none;
}
#blogpost section pre {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
  background-color: #222;
  color: white;
}
#blogpost section .tagList {
  display: inline-block;
  text-align: center;
  margin-bottom: 2em;
}
#blogpost section .tags {
  padding: 0.5em 1em 0.5em 1em;
  border-radius: 2px;
  background-color: #ececec;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 300;
  line-height: 23px;
  letter-spacing: 0.2px;
  margin-left: 0.3em;
  margin-right: 0.3em;
  color: #797979;
}
#blogpost section .btn {
  background-color: #222;
  color: white;
}
#blogpost section .btn:hover {
  background-color: #44494f;
}
</style>
