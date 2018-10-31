To allow for components to be compatible with automation services such as journey tests, macro software, or
analytics ui-components must follow these guidelines:

1. All logical html elements rendered on a page should have `data-component-type=''` and `data-component-context=''`
   attributes added.
2. The `data-component-type` attribute is used to specify what component the div/span/html tag represents. For example,
   a button element will use `data-component-type='button'`, and a data table will use `data-component-type='datatable'`.
   This is used to make it easier to specific xpath queries for complicated components (for example, select boxes). If two
   elements are visually similar but are implemented differently (e.g. `LinkButton` vs `Button`) then they should have
   different component types.
3. For react components with multiple sub items, give each item a `data-component-type`. E.g. a table should have a
   `data-component-type='table'` for the overall table tag, and a `data-component-type='table_row'` for the items within it.
4. Component types are static and should be kept identical for the same component structure regardless of usage.
   For example, use a `data-component-type='button'` rather than `'submit_button'`.
5. The `data-component-context` attribute which is provided as a prop is used to specify what a given component’s
   purpose is on a page. For example, the profile menu dropdown might say `data-component-context='profile_dropdown'`, 
   or a submit button for a form may be `data-component-context='create_goal'`. This allows us to select individual
   components within a page.
6. For react components within a page, it may be necessary to support props to specify the context for given components.
   For example for a dropdown, a prop will need to be provided for the overall dropdown’s purpose, as well as for each
   item within the dropdown (`data-component-context='delete_goal'` within a `data-component-context='goal_options'` for example)
7. It may be important when selecting a component to use the nesting of multiple components to find a particular item
   on a page. For example there could be multiple `goal_options` dropdowns on a page which lists goals, but only some of
   them would be within a `data-component-type='section' data-component-context='current_goals'` component.
8. All ui-components should have first-class support for `data-component-type` and `data-component-context`.
9. All `data-component-type` properties should exist in the global `ComponentType` enum found in `common/types/props`
   while all `data-component-context` must be able to be provided as a prop to the component and not defined statically
   anywhere in ui-components.
