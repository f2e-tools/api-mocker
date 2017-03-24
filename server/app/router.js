
module.exports = app => {
    app.get('/', 'home.index');
    app.get('/server/group', 'group.getAll')
    app.post('/server/group', 'group.create')
    app.delete('/server/group/:id', 'group.delete')

    app.get('/server/api/', 'api.getAll')
    app.get('/server/api/:groupId', 'api.getGroupAll')
    app.get('/server/api/:groupId/:apiId', 'api.getApi')
    app.post('/server/api/:groupId', 'api.createApi')
}
