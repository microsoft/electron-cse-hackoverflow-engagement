# One CSE Week - May 2021

May 17 - May 21

Participants:

- Tony Ferrell
- Kevin Hartman
- Jeremy Foster
- Brock Davis
- Ernesto Marquina
- Wesley Yao

Planning & Organizing:

- Anton Molleda
- Jacob Groundwater
- External Electron Maintainers

Lead: Ethan Arrowood

## Expectations

Going into One CSE Week, we prioritized a list of existing Electron fiddle examples to update to the latest version of Electron (v12). One of the main changes was switching to the secure-by-default isolation context for separate processes.

The prioritized list:

- docs/fiddles/features/drag-and-drop - #9
- docs/fiddles/features/keyboard-shortcuts/global - #24
- docs/fiddles/features/keyboard-shortcuts/interception-from-main - #12
- docs/fiddles/features/keyboard-shortcuts/local - #27
- docs/fiddles/features/macos-dark-mode - #51
- docs/fiddles/features/macos-dock-menu - #28
- docs/fiddles/features/notifications/main - #18
- docs/fiddles/features/notifications/renderer - #10
- docs/fiddles/features/offscreen-rendering - #50
- docs/fiddles/features/online-detection/main - #54
- docs/fiddles/features/online-detection/renderer - #15
- docs/fiddles/features/progress-bar - #16
- docs/fiddles/features/recent-documents - #68
- docs/fiddles/features/represented-file - #19

We expected active participants to contribute at least one example update over the course of the week regardless of their familiarity with Electorn. For participants already familiar with Electron, we expected at least two contributions.

## Results

Due to the nature of One CSE Week, not all of the registered participants were able to actively participate throughout the week. For those that were able to actively participate, they exceeded expectations!

All of the planned task items were worked on, many completing by the end of the week. A couple items only require a little more work to complete (and are being closed out by Ethan Arrowood).

See the [One CSE Week project board](https://github.com/microsoft/electron-cse-hackoverflow-engagement/projects/3) for more details.

Additionally, one of the participants was able to contribute to the new Electron documentation site as well:

- https://github.com/electron/electronjs.org-new/pull/35
- https://github.com/electron/electronjs.org-new/pull/36

The demo call where participants presented the work they accomplished and the things they learned was recorded and folks can watch it [here](https://web.microsoftstream.com/video/e8a60840-98dc-869c-c5d7-f1ebba6b719f). Reach out to Ethan Arrowood (etarrowo internally) with any issues.

## Feedback

After the event, feedback discussions were held with both participants and organizers. The following section is directly based on their responses.

- **Did you learn something new during the event?**
  - Everyone learned something new during the week.
  - Folks learned about Electron, about making open source contributions, and about using Electron development tools such as Electron Fiddle.
- **If you learned something new, do you think what you learned will be useful on future CSE engagements?**
  - CSE doesn't do a lot of Electron work (yet!), but if there is the opportunity, the lessons learned from this week will be very valuable.
  - The open source contribution process will definitely be applicable
  - Learning from contributing was a really great way to upskill on Electron. This may be useful for upskilling on other new technologies.
- **How did you enjoy contributing to open source? Do you feel your time was well spent contributing upstream?**
  - Felt great to contribute during work time
  - Interacting with the community was good fun and felt rewarding
  - As CSE engineers we don't get to do this frequently so it was a good change-of-pace
- **Did the work planned meet your expectations for this engagement?**
  - Breakdown was great and made the week very productive
  - Could have broken down tasks further or provided an example contribution for new contributors
- **If you had to work on this engagement again, what would you like to see changed?**
  - Example contributions
  - Collect all of the onboarding documentation into the repos (no external documents or emails)
  - Detail the merge process for better expectations
  - More advanced work; maybe more things related to the documentation or tooling platform itself.

## Takeaways

Generally, learning something totally new in a single week barely makes a lasting impact. The information barely scratches the surface and it doesn't stick with you for very long afterward. On the other hand, learning by doing is much more effective for long lasting personal knowledge impact.

By building actual examples and contributing directly to the Electron documentation, folks not only made impact to the overall Electron project, but also learned by doing. **Learning as a product of contributing is an efficient and impactful way to learn something new**.

CSE highly values engineer for reuse practices; the examples built with Electron Fiddle exemplify this practice and could be a great resource for CSE teams. The goal of Electron's feature documentation is to provide application developers with easy-to-copy code snippets so they don't have to reinvent common patterns. This part of their documentation is a perfect home for CSE teams to contribute common Electron application patterns. Additionally, CSE teams building Electron applications should look here first for solutions before reimplementing it themselves.

The week was full of impactful contributions from all of those involved. We collaborated directly with other Electron maintainers and contributors, and became apart of the larger Electron community.
