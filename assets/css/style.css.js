const css = {
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  input: {
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#27ae60',
  },
}

const style = {
  flex1: {
    ...css.flex1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    backgroundColor: '#27ae60',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
  },
  app: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
  },
  main: {
    flexDirection: 'row',
    flex: 1,
  },
  mainLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  mainRight: {
    flex: 1,
    justifyContent: 'center',
  },
  donateInput: {
    ...css.input,
    marginTop: 16,
  },
  radioArea: {
    ...css.flexRow,
  },
  amountArea: {
    ...css.flexRow,
    height: 50,
  },
  amountInput: {
    ...css.input,
    flex: 1,
    marginLeft: 16,
  },
  totalArea: {
    ...css.flexRow,
    justifyContent: 'space-between',
    height: 50,
  },
  donateBtn: {
    ...css.input,
  },
  flexRow: {
    flexDirection: 'row',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  paddingX4: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  paddingY4: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  paddingX16: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  paddingY16: {
    paddingTop: 16,
    paddingBottom: 16,
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#999',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
}

export default style
