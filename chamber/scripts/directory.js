document.addEventListener('DOMContentLoaded', function() {
    // Debug start
    console.log("Script initialized - DOM fully loaded");
    
    // DOM Elements
    const toggleBtn = document.getElementById('toggleView');
    const container = document.getElementById('member-container');

    toggleBtn.addEventListener('click', function() {
        // Toggle between views
        container.classList.toggle('grid-view');
        container.classList.toggle('list-view');
        
        // Update button text
        toggleBtn.textContent = container.classList.contains('grid-view') 
          ? 'Switch to List View' 
          : 'Switch to Grid View';})
          function toggleViewStyle() {
            const container = document.getElementById('member-container');
            
            // Toggle between views
            if (container.classList.contains('grid-view')) {
              container.classList.remove('grid-view');
              container.classList.add('list-view');
              toggleBtn.textContent = 'Switch to Grid View';
            } else {
              container.classList.remove('list-view');
              container.classList.add('grid-view');
              toggleBtn.textContent = 'Switch to List View';
            }
          } 
    
    // Verify elements exist
    if (!toggleBtn || !container) {
        console.error("Critical elements missing!");
        return;
    }

    // View state
    let isGridView = true;

    // Load and display members
    loadMembers();

    // Event listeners
    toggleBtn.addEventListener('click', toggleViewStyle);

    async function loadMembers() {
        try {
            console.log("Loading member data...");
            
            const response = await fetch('data/members.json');
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
            const data = await response.json();
            if (!data.members) throw new Error("No members array found in data");
            
            console.log(`Successfully loaded ${data.members.length} members`);
            displayMembers(data.members);
            
        } catch (error) {
            console.error("Error loading members:", error);
            container.innerHTML = `
                <div class="error">
                    <h3>Error Loading Directory</h3>
                    <p>${error.message}</p>
                    <p>Please try again later or contact support.</p>
                </div>
            `;
        }
    }

    function displayMembers(members) {
        console.log("Displaying members...");
        container.innerHTML = '';
        
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.className = 'member-card';
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" onerror="this.src='images/placeholder.png'">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership ${member.membership.toLowerCase()}">${member.membership} Member</p>
            `;
            container.appendChild(memberElement);
        });
    }

    function toggleViewStyle() {
        isGridView = !isGridView;
        container.classList.remove('grid-view', 'list-view')
        
        if (isGridView) {
            container.classList.add('grid-view',);
            toggleBtn.textContent = 'Switch to List View';
            console.log("Switched to Grid View")
        } else {
            container.classList.add('list-view');
            toggleBtn.textContent = 'Switch to Grid View';
            console.log("Switch to List View")
        }
        
        console.log(`View changed to ${isGridView ? 'Grid' : 'List'} mode`);
        void container.offsetWidth;
    }
});