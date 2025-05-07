
// pretending we're in React: (1)
// document.addEventListener("DOMContentLoaded", () => {
//   fetch('components/card.html')
//     .then(response => response.text())
//     .then(html => {
//       document.getElementById('card-container').innerHTML = html;
//     })
//     .catch(err => console.error("Failed to load component:", err));
// });

// JavaScript to handle tab switching
function showTab(tabIndex) {
  // Hide all content divs
  const contents = document.querySelectorAll('[id^="content-"]'); // see attributes(id/class/href/src/alt/type/...) & attribute selectors: https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
  contents.forEach(content => {
    content.classList.add('hidden');
  });

  // Remove active state from all tabs
  const tabs = document.querySelectorAll('[id^="tab-"]');
  tabs.forEach(tab => {
    tab.classList.remove('text-blue-500', 'border-blue-500', 'hover:text-blue-700', 'hover:border-blue-500');
    tab.classList.add('text-gray-500', 'border-transparent', 'hover:text-gray-700', 'hover:border-gray-500');
  });

  // Show the selected tab's content
  document.getElementById('content-' + tabIndex).classList.remove('hidden');

  // Add active state to the selected tab
  const activeTab = document.getElementById('tab-' + tabIndex);
  activeTab.classList.add('text-blue-500', 'border-blue-500', 'hover:text-blue-700', 'hover:border-blue-500');
  activeTab.classList.remove('text-gray-500', 'border-transparent', 'hover:text-gray-700', 'hover:border-gray-500');
}


function initBackground() {
  const storage = localStorage;
  const bodyClassList = document.querySelector('body').classList;
  let theme = localStorage.getItem('theme');

  if (!theme){
    storage.setItem('theme', 'light');
    theme = 'light';
  }
  bodyClassList.add(theme);
}

function initCheckBox() {
  const checkBox = document.querySelector('.theme-switch__checkbox');
  const theme = localStorage.getItem('theme');

  // unchecked = default = 'light'
  checkBox.checked = theme ? theme.includes('dark') : false;

  document.querySelector('.theme-switch__checkbox').addEventListener('change', function (e) {
    if (e.target.checked) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });  
}

/**
   replaces:
   function init(){
    ...
   }
   window.onload = init;
 */
document.addEventListener("DOMContentLoaded", () => {
  // Set the first tab as active by default
  showTab(1);
  initBackground();
  initCheckBox();
});