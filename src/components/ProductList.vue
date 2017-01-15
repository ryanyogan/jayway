<template>
  <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody v-if="products.length > 0">
      <tr v-for="product in products" track-by="id" @click.prevent="onEdit(product)">
        <td>{{product.name}}</td>
        <td>{{product.description}}</td>
        <td>{{product.price}}</td>
        <td><a href="#" @click.prevent.stop="onRemove(product)">remove</a></td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="4">Currently no products to display.</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['products'],
  methods: {
    onEdit(product) {
      this.$emit('edit', product);
    },
    onRemove(product) {
      this.$emit('remove', product);
    },
  },
};
</script>
