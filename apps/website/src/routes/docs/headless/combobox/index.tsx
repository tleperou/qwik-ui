import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Combobox } from '@qwik-ui/headless';
import styles from './combobox.css?inline';

const {
  useCombobox,
  Root,
  Trigger,
  Popover,
  Autocomplete,
  Groups,
  Group,
  Icons: { ChevronDown, ChevronUp },
  Options,
  Option,
} = Combobox;

export default component$(() => {
  const { scopeId } = useStylesScoped$(styles);

  const combobox1 = useCombobox();
  const combobox2 = useCombobox({ dir: 'rtl' });

  return (
    <>
      <p>This is the documentation for the Combobox</p>

      {/* WITHOUT GROUPS */}

      <h2>
        Input Combobox ({combobox1.id}, {combobox1.dir})
      </h2>

      <Root use={combobox1}>
        <Trigger label="Reviewer" class={[scopeId, 'item']}>
          <img src="https://picsum.photos/32/32" alt="NodeJS" />
          <h2>
            Jonh Doe <small>Software developer</small>
          </h2>
          {combobox1.expanded ? (
            <ChevronUp q:slot="button" />
          ) : (
            <ChevronDown q:slot="button" />
          )}
        </Trigger>

        <Popover>
          <Autocomplete label="Search a reviewer" />
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

      <h2>
        Group Combobox ({combobox2.id}, {combobox2.dir})
      </h2>

      <Root use={combobox2}>
        <Trigger label="Reviewer" class={[scopeId, 'item']}>
          <img src="https://picsum.photos/32/32" alt="NodeJS" />
          <h2>
            Jonh Doe <small>Software developer</small>
          </h2>
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
