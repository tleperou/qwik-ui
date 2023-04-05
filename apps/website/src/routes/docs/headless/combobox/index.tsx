import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Combobox } from '@qwik-ui/headless';
import styles from './combobox.css?inline';

const {
  Root,
  Trigger,
  Popover,
  Autocomplete,
  Groups,
  Group,
  Options,
  Option,
  useCombobox,
} = Combobox;

export default component$(() => {
  const { scopeId } = useStylesScoped$(styles);
  const { ref } = useCombobox();
  return (
    <>
      <p>This is the documentation for the Combobox</p>

      <h2>Input Combobox</h2>

      {/* WITHOUT GROUPS */}

      <Root ref={ref}>
        <Trigger label="Reviewer" class={[scopeId, 'item']}>
          <div class="item">
            <img
              src="https://picsum.photos/32/32"
              alt="Jonh Doe at the last company's trip"
            />
            <h2>
              Jonh Doe <small>Software developer</small>
            </h2>
          </div>
        </Trigger>

        <Popover>
          <Autocomplete label="Search reviewer" />
          <Options label="Reviewers">
            <Option class={[scopeId, 'item']}>
              <img src="https://picsum.photos/32/32" alt="NodeJS" />
              <h2>
                Jonh Doe <small>Software developer</small>
              </h2>
            </Option>
          </Options>
        </Popover>
      </Root>

      <hr style="margin-block: 3em;" />

      {/* WITH GROUPS */}

      <Root ref={ref}>
        <Trigger label="Reviewer" class={[scopeId, 'item']}>
          <div class="item">
            <img
              src="https://picsum.photos/32/32"
              alt="Jonh Doe at the last company's trip"
            />
            <h2>
              Jonh Doe <small>Software developer</small>
            </h2>
          </div>
        </Trigger>

        <Popover>
          <Autocomplete label="Search reviewer" />
          <Groups label="Reviewers">
            <Group label="Recent reviewers">
              <div q:slot="group" class="item">
                <h2>
                  Recent reviewers<small>Year to month history</small>
                </h2>
              </div>
              <Option class={[scopeId, 'item']}>
                <img src="https://picsum.photos/32/32" alt="NodeJS" />
                <h2>
                  Jonh Doe <small>Software developer</small>
                </h2>
              </Option>
            </Group>
          </Groups>
        </Popover>
      </Root>
    </>
  );
});
