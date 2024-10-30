async function getTableList() {
    try {
        const res = await fetch(`http://localhost:8080/restautant.com/v1/api/table`, {
            cache: 'no-cache',
            method: 'GET',
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.text();
            }
        });
        const result = JSON.parse(res).data;
        return result;
    } catch (error: any) {
        console.error('Failed to fetch the tableLists:', error.message);
        return { error: 'Failed to fetch tableLists' };
    }
}

async function postTable(data: any) {
    try {
        await fetch(`http://localhost:8080/restautant.com/v1/api/table/create`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
}

async function updateTable(data: any) {
    try {
        await fetch(`http://localhost:8080/restautant.com/v1/api/table/update`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
}

async function deleteTable(data: any) {
    try {
        await fetch(`http://localhost:8080/restautant.com/v1/api/table/delete`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error: any) {
        console.error('Failed to delete the table:', error.message);
        return { error: 'Failed to delete table' };
    }
}

// router.post("/table/create", tableController.handleCreateTables);
// router.get("/table", tableController.handleAllTables);
// router.put("/table/update", tableController.handleUpdateTables);
// router.delete("/table/delete", tableController.handleDeleteTables)

export { getTableList, updateTable, deleteTable, postTable };
