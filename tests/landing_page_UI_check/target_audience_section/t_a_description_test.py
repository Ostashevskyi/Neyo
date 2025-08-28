from playwright.sync_api import expect


def test_description_text(home):
    description_text = home.get_by_text(
        "Whether you're designing interfaces, writing code, editing visuals or launching campaigns — NEYO empowers every step of your creative journey.",
        exact=True)
    expect(description_text).to_be_visible()