
const toggleTabs = (e) => {
  //clear tabs of appended things
  const tabId = $(e.target).attr('id');
  $(`#${tabId}`).append(`
    <article> Lorem ipsum etc</article>
  `)
}

$('#tab-wrap').on('click', toggleTabs)
