const { get_random_draws, settlement_locations, gear_list, innovations } = require('./../ui/glossary')
const { cdnUrl } = require('./../ui/template-renderer')
const { titleCase } = require('./../ui/events')

const { addTimer } = require('./../ui/timer')

const DEBUG_MODE = true

module.exports = {
  addDevelopment,
  openLocation
}

const always_on_locations = ['Throne', 'Lantern Hoard'];

function addDevelopment() {
  $('#container').append($('<div>', {
    // style: 'opacity:.9;',
    id: 'settlement_locations_window',
    // class: 'window',
  }));

  // Subwindow selection
  $('#settlement_locations_window').hide();

  $('#settlement_locations_window').append($('<div class="development_tab_wrapper"></div>'))
  $('.development_tab_wrapper').append($('<div class="development_tab_buttons"></div>'))
  $('.development_tab_buttons').append($('<div class="development_tab_button" id="locations_button">Locations</div>'));
  $('.development_tab_buttons').append($('<div class="development_tab_button" id="innovations_button">Innovations</div>'));
  $('.development_tab_buttons').append($('<div class="development_tab_button" id="endeavor_button">Actions</div>'));

  $('#locations_button').addClass('active')

  $('.development_tab_button').click(function() {
    if (!$(this).hasClass('active')) {
      $('.development_tab_button').each(function() {$(this).removeClass('active');})
      $(this).addClass('active');
      openWindow($(this).attr('id'));
    } else {
      //
    }
  });

  window.openLocation = openLocation;
  window.showInnovation = showInnovation;
  window.filterInnovations = filterInnovations;

  getDevelopmentState(); // initializes proper development state if not present
  setupLocations();
  setupInnovations();
  setupActions();

 openWindow("locations_button")

} // end of addDevelopment

function openWindow(type) {
  // Hide all old elements
  $('#development_tabs').hide();
  $('#innovations_tab').hide();
  $('.innovations_grid_wrapper').hide();
  $('#innovations_filter').hide();
  $(".tabcontent.visible").hide();
  $('.actions_grid_wrapper').hide();

  if (type == "locations_button") {
    $('#development_tabs').show();
    $(".tabcontent.visible").show();
  }
  if (type == "innovations_button") {
    $('#innovations_tab').show();
    $('.innovations_grid_wrapper').show();
    $('#innovations_filter').show();
    $('#innovations_filter').focus()
  }
  if (type == "endeavor_button") {
    // $('#innovations_tab').show();
    $('.actions_grid_wrapper').show();
    // $('#innovations_filter').show();
    // $('#innovations_filter').focus()
    updateActions();

  }
}

// #### Locations specific functions

function setupLocations() {
  $('#settlement_locations_window').append($('<div>', {
    // style: 'opacity:.9;',
    id: 'development_tabs',
    class: 'tab',
  }));

  $('#settlement_locations_window').append($('<img>', {
    // style: 'opacity:.9;',
    id: 'settlement_locations_window_background',
    src: cdnUrl('images/reference/reference_back.png'),
  }));

  let locations_list = get_random_draws('Location', false);

  if (DEBUG_MODE) {console.log('Locations list: '+locations_list)}

  for (let i = 0; i < locations_list.length; i++) {
    createLocation(locations_list[i], (i==0) ? true : false);
  }

  allignItems('location');
  $('button.tablinks.selected:first').attr('id', "defaultOpen")

  $('.gear_card').hover(function () {
    let card = $(this)
    $(this).addClass('hoverd')
      if((!card.next().is('.gear_card'))||(!card.prev().is('.gear_card'))) {
          card.parent().scrollTo(card, duration = 500);
      }
    }, function(){
      $(this).removeClass('hoverd')
  });

  $(document).on("click", '.gear_card', function(e) {
    if (!$('.gear_card[value="'+$(this).attr('value')+'"]').hasClass('active')) {
      $('.gear_card[value="'+$(this).attr('value')+'"]').addClass('active')
    } else {
      $('.gear_card[value="'+$(this).attr('value')+'"]').removeClass('active')
    }
  });

  $(document).on("dblclick", '.tablinks[type = "location"]', function(e) {
    if (!$(this).hasClass('selected')) {
      $(this).addClass('selected')
      if ($(this).attr('value') == 'Lantern Hoard') {
        $('.tablinks[value = "Exhausted Lantern Hoard"]').removeClass('selected');
        moveItem('location', "Exhausted Lantern Hoard");
      }
      if ($(this).attr('value') == 'Exhausted Lantern Hoard') {
        $('.tablinks[value = "Lantern Hoard"]').removeClass('selected');
        moveItem('location', "Lantern Hoard");
      }
      if ($(this).attr('value') == 'Catarium') {
        $('.tablinks[value = "Lantern Hoard"]').removeClass('selected');
        moveItem('location', "Lantern Hoard");
        $('.tablinks[value = "Exhausted Lantern Hoard"]').removeClass('selected');
        moveItem('location', "Exhausted Lantern Hoard");
      }
      moveItem($(this).attr('type'), $(this).attr('value'));
    } else {
      if (!(always_on_locations.includes($(this).attr('value'))) && !($(this).attr('value') == 'Exhausted Lantern Hoard')) {
        $(this).removeClass('selected');
        $(this).show();
        moveItem($(this).attr('type'), $(this).attr('value'));
      }
    }
 });

}

function createLocation(location, default_open=false) {
  let button = $('<button>', {
    class: "tablinks",
    onclick: "openLocation(event, '"+location+"')",
    val: location,
    type: 'location'
  })
  button.html(titleCase(location));
  $('#development_tabs').append(button);

  if (['Throne', 'Sacreed Pool', 'Lantern Hoard', 'Exhausted Lantern Hoard'].includes(location)) {
    let settings = JSON.parse(sessionStorage.getItem('settings'));

    if ((settings['whiteboxes']['before the wall'] == 'Enabled') && !(settlement_locations[location]['gear']['1'].includes('Tabard'))) {
      settlement_locations[location]['gear']['1'].push('Tabard')
    }
    if (settings['whiteboxes']['before the wall'] == 'Disabled') {
        var index = settlement_locations[location]['gear']['1'].indexOf('Tabard');
        if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
    }

    if ((settings['whiteboxes']['beyond the wall'] == 'Enabled') && !(settlement_locations[location]['gear']['1'].includes('Hard Breastplate'))) {
      settlement_locations[location]['gear']['1'].push('Hard Breastplate')
      settlement_locations[location]['gear']['1'].push('Cloth Leggings')
    }
    if (settings['whiteboxes']['beyond the wall'] == 'Disabled') {
        var index = settlement_locations[location]['gear']['1'].indexOf('Hard Breastplate');
        if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
        index = settlement_locations[location]['gear']['1'].indexOf('Cloth Leggings');
        if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
    }
  }

  if (DEBUG_MODE) {console.log('Location gear:'+settlement_locations[location]['gear']);}

  let content = $('<div>', {
    class: "tabcontent",
    id: location,
  });

  let columns = []
  let gear_name = ''

  for (let j = 0; j<4; j++) {
    if (j > 0) {
      columns.push($('<div>', {
        class: "column_"+(j+1)+" gear_column",
        id: (j+1),
      }));
    } else {
      columns.push($('<div>', {
        class: "column_"+(j+1),
        id: (j+1),
      }));
    }

    if (j == 0) {
      columns[j].append($('<img>', {
        class: "location_screen",
        src: cdnUrl("images/reference/Settlement Locations/"+titleCase(location)+".jpg"),
      }));
    } else {
      if (settlement_locations[location]['gear'][j].length > 0) {
        for (let i = 0; i < settlement_locations[location]['gear'][j].length; i++) {
          gear_name = settlement_locations[location]['gear'][j][i]
          // if (DEBUG_MODE) {console.log('Adding 1: '+i)}
          let element = $('<img>', {
            class: "gear_card",
            src: cdnUrl("images/reference/Gear/"+gear_name+".jpg"),
            value: gear_name
          })
          columns[j].append(element);
          if (gear_name in gear_list) {
            let tooltip = ''
            if ('innovation' in gear_list[gear_name]) {
              tooltip = tooltip + '<b style="color:#cc0;font-size:1em;">Required: '+gear_list[gear_name]['innovation']+'</b><br/><br/>'
            }
            if ('resources' in gear_list[gear_name]) {
              tooltip = tooltip + '<div style="font-size:1.0em;">'+gear_list[gear_name]['resources'].join('<br/>')+'</div'
            }
            element.tooltipster({
              contentAsHTML: 'true',
              animation: 'grow',
              content: tooltip,
              position: 'left',
              delay: [500, 300],
              trigger: 'custom',
              triggerOpen: {
                mouseenter: true,
                click: true
              },
              triggerClose: {
                click: true,
                mouseleave: true
              }
            })
          }

        }
      }
    }

    content.append(columns[j]);
  }

  $('#settlement_locations_window').append(content);

}

function openLocation(evt, locationName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].className = tabcontent[i].className.replace(" visible", "");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(locationName).style.display = "block";
  document.getElementById(locationName).className += " visible";
  evt.currentTarget.className += " active";

  $('button.tablinks#defaultOpen').attr('id', '')
  $('button.tablinks.active').attr('id', 'defaultOpen')
}

// #### Innovations specific functions

function setupInnovations() {
  $('#settlement_locations_window').append($('<div>', {
    id: 'innovations_tab',
    class: 'tab',
  }));

  $('#settlement_locations_window').append($('<input>', {
    id: "innovations_filter",
    type: 'search',
    onkeyup: "filterInnovations()",
    onsearch: "filterInnovations(true)",
    placeholder: "Search... (# for tags)"
  }));

  $('#innovations_filter').hide();

  $('#settlement_locations_window').append($('<div>', {
    class: 'innovations_grid_wrapper',
  }));

  $('.innovations_grid_wrapper').hide();

  $('.innovations_grid_wrapper').append($('<div>', {
    class: 'innovations_grid use-hover',
  }));

  // $('.innovations_grid').sortable({
  //   // items:'.tablinks',
  //   forceHelperSize: true
  // });

  console.log('++++Creating sortable!!')

  var dragging = false

  // $('.innovations_grid').load(function() {
  //   console.log('Creating sortable!!')
  var sortable = Sortable.create(document.getElementsByClassName('innovations_grid')[0], {
    animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
    // ghostClass: 'blue-background-class'
  	// easing: "cubic-bezier(1, 0, 0, 1)",
    // sort: false,  // sorting inside list
    // Called by any change to the list (add / update / remove)
    onStart: function (/**Event*/evt, /**Event*/originalEvent) {
      // dragging = true;
      $(this).removeClass('use-hover');
      $('.innovations_grid').removeClass('use-hover')
    },
  	onEnd: function (/**Event*/evt) {
  		// same properties as onEnd
      $(this).addClass('use-hover');
      $('.innovations_grid').addClass('use-hover')
      updateInnovationsState();
  	},
  });
  // })

  let innovations_list = get_random_draws('Innovation', false).sort();

  for (let i = 0; i < innovations_list.length; i++) {
    createInnovation(innovations_list[i]);
  }

  allignItems('innovation');

  // var grid = new Muuri('.innovations_grid');

 let selected_innovations = getDevelopmentState()['innovations']
 let settings = JSON.parse(sessionStorage.getItem('settings'));

 if (DEBUG_MODE) {console.log('Selected innovations:'+selected_innovations)}

 for (let i = 0; i < selected_innovations.length; i++) {
   if (toShow(selected_innovations[i])) {
     showInnovation(selected_innovations[i], initialization=true);
     $('.tablinks[value="'+selected_innovations[i]+'"]').hide();
   } else {
     updateInnovationsState();
   }
 }

 $(document).on("dblclick", '.tablinks[type = "innovation"]', function(e) {

   $(this).addClass('selected')
   $(this).hide();
   showInnovation($(this).attr('value'));
   updateInnovationsState();
   console.log('Selected innovations1:'+getDevelopmentState()['innovations'])

   moveItem($(this).attr('type'), $(this).attr('value'));
});

$(document).on("dblclick", '.innovation_card', function(e) {
  $('.tablinks[value="'+$(this).attr('value')+'"]').removeClass('selected')
  $('.tablinks[value="'+$(this).attr('value')+'"]').show();
  $('.innovation_card[value="'+$(this).attr('value')+'"]').fadeOut(300, function() {
    $('.innovation_card[value="'+$(this).attr('value')+'"]').remove();
    updateInnovationsState();
    console.log('Selected innovations2:'+getDevelopmentState()['innovations'])
  });

  moveItem('innovation', $(this).attr('value'));
 });

 $(document).on("click", '.innovation_card', function(e) {
   if (!$('.innovation_card[value="'+$(this).attr('value')+'"]').hasClass('active')) {
     $('.innovation_card[value="'+$(this).attr('value')+'"]').addClass('active')
   } else {
     $('.innovation_card[value="'+$(this).attr('value')+'"]').removeClass('active')
   }
  });
}

function filterInnovations(clear=false) {

  let input, filter;
  input = document.getElementById("innovations_filter");
  filter = input.value.toUpperCase();
  let show = false

  if (clear) {
    input.value = ''
  } else {
    if (filter.charAt( 0 ) == '#') {
      if (!$('#innovations_filter').hasClass('tags')) {
        $('#innovations_filter').addClass('tags')
      }
      input.value = '#'+input.value.substr(1).replace(/ +(?= )/g,'');
      input.value = '#'+input.value.substr(1).replace(/[^A-Za-z ]/gi, '')
    } else {
      if ($('#innovations_filter').hasClass('tags')) {
        $('#innovations_filter').removeClass('tags')
      }
      input.value = input.value.replace(/ +(?= )/g,'');
      input.value = input.value.replace(/[^A-Za-z \-]/gi, '')
    }
  }

  if (filter.replace((/ /g, '')) == '#') {
    return
  }

  $('#innovations_tab > button:not(.selected)').each(function() {
    let txtValue = $(this).text();
    if (DEBUG_MODE) {console.log('Innovation:'+txtValue)}
    if (filter.charAt( 0 ) == '#') {
      if (innovations[txtValue]['tags'].join(', ').toUpperCase().indexOf(filter.substr(1)) > -1) {
        $(this).css("display", "block");
      } else {
        $(this).css("display", "none");
      }
    } else {
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        $(this).css("display", "block");
      } else {
        $(this).css("display", "none");
      }
    }
  })
}

function updateInnovationsState() {
  let development_state = getDevelopmentState();

  development_state['innovations'] = getCurrentItems('innovation', selected=true, element='.innovation_card')
  setDevelopmentState(development_state)

  if (DEBUG_MODE) {console.log(development_state['innovations'])}

}

function createInnovation(innovation) {
  let button = $('<button>', {
    class: "tablinks",
    val: innovation,
    type: 'innovation'
  })
  button.html(titleCase(innovation).replace(' Of ', ' of ').replace(' The ', ' the '));
  $('#innovations_tab').append(button);

  let img_element = $('<img>', {
    src: "images/reference/Innovations/"+innovation+".jpg",
    class: "tooltip_image_innovation"
  }).load(function() {
    button.tooltipster({
      contentAsHTML: true,
      animation: 'grow',
      content: $(this),
      position: 'right',
      delay: [1500, 100],
      maxWidth: 200,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    });
  })
}

function showInnovation(innovationName, initialization=false) {
  // need a better solution one day - but it destroys all the duplicates that appear on windows reload
  if ($('.innovation_card[value="'+innovationName+'"]').length > 0) {
    $('.innovation_card[value="'+innovationName+'"]').each(function() {
      $(this).remove();
    })
  }

  let img = $('<img>', {
    class: 'innovation_card use-hover',
    value: innovationName,
    src: cdnUrl('images/reference/Innovations/'+innovationName+'.jpg'),
  });

  img.hide();

  if (($('.innovation_card').length) && (!initialization)){
		img.insertBefore('.innovation_card:first');
	} else {
		$('.innovations_grid').append(img);
	}

  img.load(function() {
    $(this).delay(50).fadeIn(300);
  })

};

// #### Actions specific functions

function setupActions() {
  // $('#settlement_locations_window').append($('<div>', {
  //   id: 'innovations_tab',
  //   class: 'tab',
  // }));

  $('#settlement_locations_window').append($('<div>', {
    class: 'actions_grid_wrapper',
  }));

  $('.actions_grid_wrapper').hide();

  $('.actions_grid_wrapper').append($('<div>', {
    class: 'actions_grid use-hover',
  }));

  $(document).on("click", '.action_card', function(e) {
    $(this).toggleClass('active')
  });
}

function updateActions() {
  let development = getDevelopmentState();
  let settings = JSON.parse(sessionStorage.getItem('settings'));

  $('.actions_grid').empty();

  for (let i = 0; i < development['locations'].length; i++) {
    if (('action' in settlement_locations[development['locations'][i]]) && settlement_locations[development['locations'][i]]['action']) {
      if (toShow(development['locations'][i])) {
        console.log('Adding location: '+development['locations'][i])
        addAction(development['locations'][i], 'location')
      }
    }
  }

  for (let i = 0; i < development['innovations'].length; i++) {
    if (('action' in innovations[development['innovations'][i]]) && innovations[development['innovations'][i]]['action']) {
      if (toShow(development['innovations'][i])) {
        console.log('Adding innovation: '+development['innovations'][i])
        addAction(development['innovations'][i], 'innovation')
      }
    }
  }


  addTimer(function() {var grid = new Muuri('.actions_grid', {
    dragEnabled: false,
    layoutOnInit: true,
    layout: {
      round: false,
      // horizontal: true,
      fillGaps: true,
    },
  });}, 100)
 // addTimer(function() {window.dispatchEvent(new Event('resize'))}, 300)

}

function addAction(name, type) {

let item = $('<div>', {
  class: 'item '+type,
  id: 'action-card'
})

let item_content = $('<div>', {
  class: 'item-content',
  id: 'action-card'
})

let img = $('<img>', {
  class: 'action_card use-hover',
  value: name,
  src: cdnUrl('images/settlement/actions/'+name+'.jpg'),
});

img.tooltipster({
  contentAsHTML: 'true',
  animation: 'grow',
  content: name,
  position: 'left',
  delay: [500, 300],
  trigger: 'custom',
  triggerOpen: {
    mouseenter: true,
    click: true
  },
  triggerClose: {
    click: true,
    mouseleave: true
  }
})

item_content.append(img)
item.append(item_content)

// img.hide();

 $('.actions_grid').append(item)

 img.load(function() {
   $(this).delay(50).fadeIn(300);
 })
}

// #### General purpose functions
function getDevelopmentState() {
  let development_state = JSON.parse(localStorage.getItem('development'));

  let updated = false
  // check if development has the right format and is stored in local storage, and if not initialize it
  if ((development_state == null) || (development_state == 'undefined')) {
    development_state = {}
    development_state['locations'] = always_on_locations
    development_state['innovations'] = [];
    updated = true
  } else {
    if (!('locations' in development_state)) {
      development_state['locations'] = always_on_locations
      updated = true
    }
    if (!('innovations' in development_state)) {
      development_state['innovations'] = []
      updated = true
    }
  }

  if (updated) {
    setDevelopmentState(development_state)
  }

  return development_state
}

function setDevelopmentState(development_state) {
  development_state['locations'] = development_state['locations'].filter(function(item, pos) {
    return development_state['locations'].indexOf(item) == pos;
  })
  development_state['innovations'] = development_state['innovations'].filter(function(item, pos) {
    return development_state['innovations'].indexOf(item) == pos;
  })
  localStorage.setItem('development', JSON.stringify(development_state))
}

function allignItems(type) {
  let development_state = getDevelopmentState();
  let settings = JSON.parse(sessionStorage.getItem('settings'));

  if (DEBUG_MODE) {console.log('Dev state'+development_state)}

  let selected_items = development_state[type+'s'];
  let items_list = getCurrentItems(type);

  for (let i = items_list.length - 1; i >= 0 ; i--) {
    // if (selected_items.includes(items_list[i])
    if (!($.inArray(items_list[i], selected_items) == -1)) {
      $('button.tablinks[value="'+items_list[i]+'"]').addClass('selected')
      $('button.tablinks[value="'+items_list[i]+'"]').detach().insertBefore('button.tablinks[type="'+type+'"]:first');
    }
  }
} // end of alignItems

function moveItem(type, name) {

  // if ((type == 'location')) {
  //   if (always_on_locations.includes(name)) {
  //     return
  //   }
  // }

  let development_state = getDevelopmentState();
  let this_element = $('button.tablinks[type="'+type+'"][value="'+name+'"]')
  let needed_value = null
  var cnt = 0;
  this_element.addClass('moving')
  if (this_element.hasClass('selected')) {
    development_state[type+'s'].push(name)
    $('button.tablinks[type="'+type+'"].selected:not(.moving)').each(function () {
      if ($(this).attr('value') < name) {
        needed_value = $(this).attr('value')
      }
      cnt = cnt + 1;
    })

  } else {
    let index = development_state[type+'s'].indexOf(name);
    if (index !== -1) {
      development_state[type+'s'].splice(index, 1);
    }
    $('button.tablinks[type="'+type+'"]:not(.selected):not(.moving)').each(function () {
      if ($(this).attr('value') < name) {
        needed_value = $(this).attr('value')
      }
    })
    // if (needed_value == null) {
    //   needed_value = $('button.tablinks:not(.selected)')
    // }
  }

  if (needed_value == null) {
    if (this_element.hasClass('selected')) {
      if (cnt > 0) {
        this_element.detach().insertBefore('button.tablinks[type="'+type+'"].selected:not(.moving):first');
      } else {
        this_element.detach().insertBefore('button.tablinks[type="'+type+'"]:not(.selected):first');
      }
    } else {
      this_element.detach().insertAfter('button.tablinks.selected[type="'+type+'"]:not(.moving):last');
    }

  } else {
    this_element.detach().insertAfter('button.tablinks[type="'+type+'"][value="'+needed_value+'"]');
  }

  if (this_element.hasClass('selected')) {
    this_element.parent().scrollTo($('button.tablinks[type="'+type+'"]:first'), duration = 500);
  }

  this_element.removeClass('moving')

  setDevelopmentState(development_state)

} // end of moveLocation

function getCurrentItems(type, selected=false, element='default') {
  let items = [];

  if (element == 'default') {
    if (selected) {
      $('button.tablinks[type="'+type+'"].selected').each(function () {
        items.push($(this).attr('value'))
      })
    } else {
      $('button.tablinks[type="'+type+'"]').each(function () {
        items.push($(this).attr('value'))
      })
    }
  } else {
    $(element).each(function () {
      items.push($(this).attr('value'))
    })
  }

  return items

}

function toShow(name) {
  let list = []
  let visibility = []

  console.log('To consider: '+name)
  if (!($.inArray(name, Object.keys(settlement_locations)) == -1)) {
    list = settlement_locations
    visibility = ['All content']
    console.log('It is location.')
  }
  else if (!($.inArray(name, Object.keys(innovations)) == -1)) {
    list = innovations
    visibility = ['Cards only', 'All content']
    console.log('It is innovation.')
  } else {
    console.log('Can not say what it is...')
    return false
  }

  let settings = JSON.parse(sessionStorage.getItem('settings'));

  if (('campaign' in list[name]) && !(list[name]['campaign'].includes(settings['campaign']))) {
    console.log('Different campaign.')
    return false
  } else if (('expansion' in list[name]) && !(visibility.includes(settings['expansions'][list[name]['expansion']]))) {
    console.log('Expansion '+list[name]['expansion']+' is '+ settings['expansions'][list[name]['expansion']])
    console.log('Expansion disabled.')
    return false
  } else {
    console.log('Good to show!.')
    return true
  }

}
