
const toggleTabs = (e) => {
  $('#drop-tab').remove();
  const tabClass = $(e.target).attr('class') || $('div #active').attr('class');
  $('div #active').removeAttr('id', 'active');
  $(`.${tabClass}`).attr('id', 'active');
  $(`.${tabClass}`).after(`
    <article id='drop-tab'>
      <img class='tab-plcholder-img' src='assets/placeholder.png' alt='placeholder image' />
      <div>
        <h2>Annoy the ${tabClass} grumpy cat, start</h2>
        <hr />
        <p>Destroy house in 5 seconds cat chases laser jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water or paw at beetle</p>
        <p>meow loudly at 5am next to human slave food dispenser. howl uncontrollably for no reason hide head hate dog, for give me some of your food give me some of your food give me some of your food meh, i don't want it</p>
      </div>
    </article>
  `)
}

$('#tab-wrap').on('click', toggleTabs)
