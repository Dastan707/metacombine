<template>
  <div>
    <q-card bordered class="card no-shadow">
      <q-card-section>
        <div class="text-h6 row justify-center">Minimun PC Requirements</div>
        <ol>
          <li v-for="req in pc_requirements" :key="req.id">{{req}}</li>
        </ol>
      </q-card-section>
      <q-card-section>
        <div class="text-h6 row justify-center">Minimun Smartphone Requirements</div>
        <ol>
          <li v-for="req in smartphone_requirements" :key="req.id">{{req}}</li>
        </ol>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'GameRequirements',
  props: ['pc_requirements', 'smartphone_requirements']
}
</script>

<style lang="scss" scoped>
.card{
  width: 450px;
}
</style>
