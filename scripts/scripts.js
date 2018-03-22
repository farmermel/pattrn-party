
const toggleTabs = (e) => {
  $('#drop-tab').remove();
  const tabId = $(e.target).attr('id');
  $('div .active').removeClass('active');
  $(`#${tabId}`).addClass('active');
  $(`#${tabId}`).append(`
    <article id='drop-tab'>
      
      <h2>Annoy the ${tabId} grumpy cat, start</h2>
      <hr />
      <p>Destroy house in 5 seconds cat chases laser jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water or paw at beetle,
      <br />
      <br />

       meow loudly at 5am next to human slave food dispenser. howl uncontrollably for no reason hide head hate dog, for give me some of your food give me some of your food give me some of your food meh, i don't want it</p>
    </article>
  `)
}

$('#tab-wrap').on('click', toggleTabs)
