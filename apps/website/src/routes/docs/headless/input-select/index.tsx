import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { InputSelect } from '@qwik-ui/headless';

export default component$(() => {
  useStylesScoped$(`
   h1 { margin: 2rem 0; padding-top: 1rem; font-weight: bold; border-top: 1px dotted #222}
   .form-item, hr { width: 35em; }
   h2 { margin-block: 1.15em 0.5em; font-size: xx-large; }
   h3 { margin-block: 0.85em 0.35em; font-size: x-large; }
  `);

  return (
    <>
      <p>This is the documentation for the Input Select</p>

      <h2>Input Select Example</h2>

      <div class="input-form">
        <InputSelect />
      </div>

      <hr />

      <h3>Inputs</h3>

      <ul>
        <li></li>
      </ul>

      <hr />

      <h3>Outputs</h3>

      <ul>
        <li></li>
      </ul>
    </>
  );
});
