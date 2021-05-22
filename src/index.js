function loadAccordions(hook, vm) {
  hook.doneEach(function () {
    const allHeaders = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    for (let i = 0; i < allHeaders.length; i++) {
      if (allHeaders[i].firstChild.firstChild.textContent.endsWith(" +")) {
        allHeaders[i].classList.add('accordion')

        headerAside = document.querySelector(`a[title='` + allHeaders[i].firstChild.firstChild.textContent + `']`);
        headerAside.href = headerAside.href.substring(0, headerAside.href.length-1);
        headerAside.setAttribute('title', headerAside.getAttribute('title').substring(0, headerAside.getAttribute('title').length-2));
        headerAside.textContent = headerAside.textContent.substring(0, headerAside.textContent.length-2);

        allHeaders[i].id = allHeaders[i].id.substring(0, allHeaders[i].id.length-1);
        allHeaders[i].firstChild.href = allHeaders[i].firstChild.href.substring(0, allHeaders[i].firstChild.href.length-1);
        allHeaders[i].firstChild.setAttribute('data-id', allHeaders[i].firstChild.getAttribute('data-id').substring(0, allHeaders[i].firstChild.getAttribute('data-id').length-1));

        titleSpan = allHeaders[i].firstChild.firstChild;
        titleSpan.textContent = titleSpan.textContent.substring(0, titleSpan.textContent.length-2)
        plusSpan = document.createElement('span');
        plusSpan.textContent = '+';
        plusSpan.classList = 'plus';
        titleSpan.insertAdjacentElement('afterend', plusSpan);
      }
    }

    const accordions = document.querySelectorAll('.accordion');

    let currentHeaderType;
    let panelDiv;
    let panelContent;
    let panelContents;

    for (i = 0; i < accordions.length; i++) {
      panelContents = [];
      currentHeaderType = accordions[i].tagName;
      panelDiv = document.createElement('div');
      panelContent = accordions[i];
      panelDiv.classList.add('panel');
      while (panelContent) {
        panelContent = panelContent.nextElementSibling;
        if (panelContent && panelContent.tagName !== currentHeaderType) {
          panelContents.push(panelContent);
        } else {
          break;
        }
      }
      for (let j = 0; j < panelContents.length; j++) {
        console.log(accordions[i])
        console.log(panelContents[j])
        panelDiv.append(panelContents[j])
        console.log(panelDiv)
      }
      accordions[i].insertAdjacentElement('afterend', panelDiv);
    }

    for (i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function() {
        this.classList.toggle("opened");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  });
}