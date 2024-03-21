<template>
    <div>
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="基础编辑器" name="first">
        <base-editor></base-editor>
      </el-tab-pane>
      <el-tab-pane label="批注/注释" name="second">
        <comment-editor></comment-editor>
      </el-tab-pane>
      <el-tab-pane label="新旧区分" name="third">
        <diff-editor></diff-editor>
      </el-tab-pane>
      <!-- <el-tab-pane label="协作演示" name="fourth">
        <collaboration-editor></collaboration-editor>
      </el-tab-pane> -->
    </el-tabs>
    </div>
  </template>
  
  <script>
  import BaseEditor from '@/components/educationEditor/moduleEducation/BaseEditor.vue'
  import CommentEditor from '@/components/educationEditor/moduleEducation/CommentEditor.vue'
  import DiffEditor from '@/components/educationEditor/moduleEducation/DiffEditor.vue'
  import CollborationEditor from '@/components/educationEditor/moduleEducation/CollaborativeEditor.vue'
  export default {
    components:{
      BaseEditor,CommentEditor,DiffEditor,CollborationEditor
    },
    data() {
        return {
          activeName: 'first',
        }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event)
        },
      },
  }
  </script>
  
  <style>
  
  </style>