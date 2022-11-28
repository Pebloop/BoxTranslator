<script lang='ts'>
    import Menu from '@smui/menu';
    import List, { Item, Separator, Text } from '@smui/list';
    import Button, { Label } from '@smui/button';
   
    let menu: Menu;
    let isProject: boolean = false;

    function create_project() {
        console.log("create project");
    }

    function open_project() {
        console.log("open project");
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
