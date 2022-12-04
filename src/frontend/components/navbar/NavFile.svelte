
<script lang='ts'>
    import Menu from '@smui/menu';
    import List, { Item, Separator, Text } from '@smui/list';
    import Button, { Label } from '@smui/button';
    import {pageStore} from "../../stores/page_store";
    import {projectStore} from "../../stores/project_store";
   
    let menu: Menu;
    let isProject: boolean = false;

    projectStore.subscribe((project) => {
      if (project) {
        isProject = project !== null && project !== undefined;
      }
    });

    function create_project() {
      pageStore.set("create-project");
    }

    function open_project() {
      pageStore.set("startup");
    }

    function import_project() {
      console.log("import project");
    }

    function save_project() {
        console.log("save project");
    }

    function save_project_as() {
        console.log("save project as");
    }

  </script>

<main>
    <div style="min-width: 100px;">
        <Button on:click={() => menu.setOpen(true)}>
          <Label>File</Label>
        </Button>
        <Menu bind:this={menu}>
          <List>
            <Item on:SMUI:action={create_project}>
              <Text>New Project</Text>
            </Item>
            <Item on:SMUI:action={open_project}>
              <Text>Open Project</Text>
            </Item>
            <Item on:SMUI:action={import_project}>
              <Text>Import Project</Text>
            </Item>
            <Separator />
            <Item on:SMUI:action={save_project} disabled={!isProject}>
              <Text>Save</Text>
            </Item>
            <Item on:SMUI:action={save_project_as} disabled={!isProject}>
              <Text>Save as...</Text>
            </Item>
            <Separator />
            <Item on:SMUI:action={() => (close())}>
              <Text>Quit</Text>
            </Item>
          </List>
        </Menu>
      </div>
</main>
