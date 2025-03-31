<template>
  <v-container>
    <div class="container">
      <v-card variant="text" class="mt-4">
        <template #text>
          <a
            v-for="(socialLink, i) in details.socialLinks"
            :key="i"
            :href="socialLink.link"
            target="_blank"
            class="mr-2"
          >
            <v-img :src="socialLink.icon" height="25" class="icon"></v-img>
          </a>
        </template>
      </v-card>
      <v-card variant="text">
        <template #title>
          <div class="text-h4">{{ details.about?.title }}</div>
        </template>
        <template #subtitle>
          <div class="text-h5">{{ details.about?.subtitle }}</div>
        </template>
        <template #text>
          <div class="text-subtitle-1">{{ details.about?.summary }}</div>
        </template>
      </v-card>
      <v-card variant="text">
        <template #title><div class="text-h5">About</div></template>
        <template #text>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="text-subtitle-1" v-html="details.about?.description"></div>
          <div>&nbsp;</div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="text-body-1 text-grey-lighten-1" v-html="details.about?.footer"></div>
        </template>
      </v-card>
      <v-card variant="text">
        <template #title><div class="text-h5">Projects</div></template>
        <v-card v-for="(project, i) in details.projects" :key="i" variant="text">
          <template #title>
            <div class="text-subtitle-1">{{ project.title }}</div>
          </template>
          <template #subtitle>
            <div class="text-subtitle-1">{{ project.subtitle }}</div>
          </template>
          <template #text>
            <a v-for="(link, j) in project.links" :key="j" :href="link.link" target="_blank">
              <v-img :src="link.icon" :width="link.width"></v-img>
            </a>
          </template>
          <template #prepend>
            <v-img :src="project.icon" width="64" class="rounded-lg"></v-img>
          </template>
        </v-card>
      </v-card>
      <v-card variant="text">
        <template #title><div class="text-h5">Skills</div></template>
        <template #text>
          <ul class="pl-4 text-subtitle-1">
            <li v-for="(skill, i) in details.skills" :key="i" class="pl-0">{{ skill }}</li>
          </ul>
        </template>
      </v-card>
      <v-card variant="text">
        <template #title><div class="text-h5">Experience</div></template>
        <a v-for="(experience, i) in details.experiences" :key="i" :href="experience.website" target="_blank">
          <v-card variant="text">
            <template #title>
              <div class="text-subtitle-1">{{ experience.title }}</div>
            </template>
            <template #subtitle>
              <div class="text-subtitle-1">{{ experience.subtitle }}</div>
              <div class="text-subtitle-1">{{ experience.date }}</div>
              <div class="text-subtitle-1">{{ experience.location }}</div>
            </template>
            <template #prepend>
              <v-img :src="experience.logo" width="64" class="rounded-lg"></v-img>
            </template>
          </v-card>
        </a>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { Details } from '../portfolio';

export default {
  data() {
    return {
      details: {},
    };
  },
  mounted() {
    this.details = Details;
  },
};
</script>
