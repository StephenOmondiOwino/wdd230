document.addEventListener('DOMContentLoaded', function () {
    const membersContainer = document.getElementById('membersContainer');
    const toggleViewButton = document.getElementById('toggleView');

    fetch('data/members.json')
        .then(response => response.json())
        .then(members => {
            members.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');
                
                // Insert the image using the 'image' property from the JSON data
                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name} Logo" />
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>${member.description}</p>
                `;
                
                membersContainer.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error fetching member data:', error));

    toggleViewButton.addEventListener('click', function () {
        if (membersContainer.classList.contains('grid-view')) {
            membersContainer.classList.remove('grid-view');
            membersContainer.classList.add('list-view');
            toggleViewButton.textContent = "Switch to Grid View";
        } else {
            membersContainer.classList.remove('list-view');
            membersContainer.classList.add('grid-view');
            toggleViewButton.textContent = "Switch to List View";
        }
    });
});
