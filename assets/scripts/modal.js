window.addEventListener(`load`, async () => {
   // insert the modal at the end of the html's body code
   const modalObject = document.createElement(`div`);
   modalObject.id = `modal-background`;
   modalObject.innerHTML = `
      <div id="modal">

         <div class="large-corner-border">
            <div class="large-border box">


               <table style="border-collapse: collapse; height: 100%; width: 100%">

                  <tr>
                     <td valign="top">
                        <span id="modal-content">

                        </span>
                     </td>
                  </tr>

                  <tr>
                     <td valign="top">
                        <div class="list" valign="bottom">
                           <div class="corner-border" style="--border-colour: #f60000;">
                              <a class="border large-button" id="close-modal" style="--border-colour: #f60000;" draggable="false">
                                 <img class="emoji" src="https://cdn.nuzzles.dev/emojis/mutant_standard/bomb.webp" alt="bomb" title=":bomb:" draggable="false"/>
                                 <div>
                                    <strong>close modal</strong>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </td>
                  </tr>


               </table>


            </div>
         </div>

      </div>
   `;

   document.body.appendChild(modalObject);


   // api requests for the modal content
   const [ pageCommitSha, pageCommitMessage, pageLastUpdated ] = await (async () => {
      const response = await fetch(`https://api.github.com/repos/magicalbunny31/nuzzles.dev/commits?path=${path}` , {
         headers: {
            "User-Agent": `nuzzles.dev (https://github.com/magicalbunny31/nuzzles.dev)`
         }
      });

      if (!response.ok)
         return [ `idk`, `idk`, `idk` ];

      const [ data ] = await response.json();
      return [ data?.sha || `idk`, data?.commit.message || `idk`, data?.commit.author.date || `idk` ];
   })();


   // html to load for the modal
   const info = `
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/emojis/mutant_standard/red_question_mark.webp" alt="red question mark" title=":red_question_mark:" draggable="false"/>
         questions? issues? something you wanna BARK at??
      </h2>
      <ul>
         <li>
            keep all that yapping in the
            <a href="https://github.com/magicalbunny31/nuzzles.dev/issues" target="_blank">issue tracker</a>~
         </li>
      </ul>
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/emojis/mutant_standard/curled_page.webp" alt="curled page" title=":curled_page:" draggable="false"/>
         site info
      </h2>
      <ul>
         <li>
            <code>version</code> <a href="/" target="_blank">nuzzles.dev</a> v5
         </li>
         <li>
            <code>commit</code> ${pageCommitSha} "${pageCommitMessage}"
         </li>
         <li>
            <code>updated at</code> ${pageLastUpdated}
         </li>
      </ul>
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/emojis/mutant_standard/bust_in_silhouette.webp" alt="bust in silhouette" title=":bust_in_silhouette:" draggable="false"/>
         whoami
      </h2>
      <ul>
         <li>
            <code>user-agent</code> ${window.navigator.userAgent}
         </li>
      </ul>
   `;

   const attribution = `
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/emojis/mutant_standard/2_busts_in_silhouette.webp" alt="2 busts in silhouette" title=":2_busts_in_silhouette:" draggable="false"/>
         site contributors
      </h2>
      <ul>
         <li>
            🦊 <a href="https://nuzzles.dev" target="_blank">magicalbunny31</a>
         </li>
      </ul>
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/logos/discord.png" alt="discord logo" title="discord" draggable="false"/>
         discord icons
      </h2>
      <ul>
         <li>
            <code>creator</code> <a href="https://discord.com" target="_blank">Discord</a>
         </li>
         <li>
            <code>examples</code>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/discord/slash_command.png" alt="slash command" title=":slash_command:" draggable="false"/>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/discord/shapes_dancing.gif" alt="dancing shapes" title=":shapes_dancing:" draggable="false"/>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/discord/controller.png" alt="controller" title=":controller:" draggable="false"/>
         </li>
         <li>
            <code>source</code> <a href="https://discord.com" target="_blank">https://discord.com</a>
         </li>
      </ul>
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/logos/google_fonts.png" alt="google fonts logo" title="google fonts" draggable="false"/>
         google fonts material symbols & icons
      </h2>
      <ul>
         <li>
            <code>creator</code> <a href="https://opensource.google" target="_blank">Google</a>
         </li>
         <li>
            <code>license</code> <a href="https://github.com/google/material-design-icons/blob/master/LICENSE" title="Apache License Version 2.0" target="_blank">Apache-2.0</a>
         </li>
         <li>
            <code>example</code>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/google_material_design_icons/database.png" alt="database" title=":database:" draggable="false"/>
         </li>
         <li>
            <code>source</code> <a href="https://fonts.google.com/icons" target="_blank">https://fonts.google.com/icons</a>
         </li>
      </ul>
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/logos/microsoft.png" alt="microsoft logo" title="microsoft" draggable="false"/>
         microsoft fluent emoji
      </h2>
      <ul>
         <li>
            <code>creator</code> <a href="https://opensource.microsoft.com" target="_blank">Microsoft Corporation</a>
         </li>
         <li>
            <code>license</code> <a href="https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE" title="The MIT License" target="_blank">MIT</a>
         </li>
         <li>
            <code>example</code>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/microsoft_fluentui_emoji/lizard.png" alt="lizard" title=":lizard:" draggable="false"/>
         </li>
         <li>
            <code>source</code> <a href="https://github.com/microsoft/fluentui-emoji" target="_blank">https://github.com/microsoft/fluentui-emoji</a>
         </li>
      </ul>
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/emojis/mutant_standard/mutant_standard.webp" alt="mutant standard emoji logo" title=":mutant_standard:" draggable="false"/>
         mutant standard emoji
      </h2>
      <ul>
         <li>
            <code>creator</code> © <a href="https://nocturne.works" target="_blank">Caius Nocturne</a> 2017 - 2026
         </li>
         <li>
            <code>license</code> <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International" target="_blank">CC BY-NC-SA 4.0</a>
         </li>
         <li>
            <code>examples</code>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/mutant_standard/fox.webp"          alt="fox"        title=":fox:"          draggable="false"/>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/mutant_standard/bun_paw_wave.webp" alt="waving paw" title=":bun_paw_wave:" draggable="false"/>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/mutant_standard/laptop.webp"       alt="laptop"     title=":laptop:"       draggable="false"/>
         </li>
         <li>
            <code>source</code> <a href="https://mutant.tech" target="_blank">https://mutant.tech</a>
         </li>
      </ul>
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/emojis/pulexart/pulex.png" alt="pulex logo" title="pulex" draggable="false"/>
         pulexart stickers
      </h2>
      <ul>
         <li>
            <code>creator</code> <a href="https://www.patreon.com/Pulex" target="_blank">Pulex</a>
         </li>
         <li>
            <code>example</code>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/pulexart/happ.png" alt="smiling fox" title=":happ:" draggable="false"/>
         </li>
         <li>
            <code>source</code> <a href="https://www.pulexart.com" target="_blank">https://www.pulexart.com</a>
         </li>
      </ul>
      <h2>
         <img class="emoji" src="https://cdn.nuzzles.dev/logos/twitter.png" alt="twitter logo" title="twitter" draggable="false"/>
         twemoji
      </h2>
      <ul>
         <li>
            <code>creators</code> © <a href="https://opensource.twitter.dev" target="_blank">Twitter</a> 2014 - 2021, © Jason Sofonia & <a href="https://github.com/jdecked" target="_blank">Justine De Caires</a> 2022 - present
         </li>
         <li>
            <code>licenses</code>
            <a href="https://github.com/jdecked/twemoji/blob/master/LICENSE" title="The MIT License" target="_blank">MIT</a>,
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International" target="_blank">CC BY-NC-SA 4.0</a>
         </li>
         <li>
            <code>examples</code>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/twemoji/flag_gb.webp"      alt="flag of the United Kingdom" title=":flag_gb:"      draggable="false"/>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/twemoji/flag_ph.webp"      alt="flag of the Philippines"    title=":flag_ph:"      draggable="false"/>
            <img class="emoji" src="https://cdn.nuzzles.dev/emojis/twemoji/rainbow_flag.webp" alt="rainbow pride flag"         title=":rainbow_flag:" draggable="false"/>
         </li>
         <li>
            <code>source</code> <a href="https://github.com/jdecked/twemoji" target="_blank">https://github.com/jdecked/twemoji</a>
         </li>
      </ul>
   `;


   // when the modal's open button is pressed, open the modal and load the correct content
   const modalBackground = document.getElementById(`modal-background`);
   const modalContent = document.getElementById(`modal-content`);

   const openModalButtons = document.getElementsByClassName(`modal-button`);
   for (const openModalButton of openModalButtons)
      openModalButton.onclick = () => {
         modalBackground.style.display = `flex`;

         const content = (() => {
            switch (openModalButton.id) {
               case `info`:        return info;
               case `attribution`: return attribution;
            };
         })();

         modalContent.innerHTML = content;
      };


   // when the modal's close button is pressed, close the modal
   const closeModalButton = document.getElementById(`close-modal`);
   closeModalButton.onclick = () => {
      modalBackground.style.display = `none`;
      modalBackground.classList.remove(`disable-click-out`);
   };


   // when the user clicks out of the modal, close the modal
   window.onclick = event => {
      if (event.target == modalBackground && !modalBackground.classList.contains(`disable-click-out`))
         modalBackground.style.display = `none`;
   };
});