export default function(context) {
  // go tell the store to update the page
  context.store.dispatch('routes/setPage', context.route.name)
}
