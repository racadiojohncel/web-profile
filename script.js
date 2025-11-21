fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const activitiesContainer = document.getElementById('activities-container');
    data.activities.forEach(activity => {
      const card = document.createElement('div');
      card.classList.add('activity-card');

      const title = document.createElement('h3');
      title.textContent = activity.title;
      title.style.textAlign = 'center';
      title.style.marginBottom = '10px';
      card.appendChild(title);

      const exp = document.createElement('p');
      exp.textContent = activity.experience;
      card.appendChild(exp);

      activitiesContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const profileContainer = document.getElementById('profile');

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = data.profile.fullName;
    profileContainer.appendChild(name);

    const bio = document.createElement('p');
    bio.classList.add('bio');
    bio.textContent = data.profile.bio;
    profileContainer.appendChild(bio);

    const hr = document.createElement('hr');
    profileContainer.appendChild(hr);

    const githubLink = document.createElement('a');
    githubLink.classList.add('github-link');
    githubLink.href = data.profile.links.github;
    githubLink.target = "_blank";
    githubLink.textContent = "GitHub";
    profileContainer.appendChild(githubLink);
  })
  .catch(error => console.error('Error loading profile JSON:', error));
