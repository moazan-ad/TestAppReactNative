import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const ImageItem = ({ item }) => {
    const { previewURL, user, likes, comments, views, downloads } = item;

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <View style={styles.wrapIcon}>
                    <Icon name="user" type="font-awesome" color="#777" size={18} />
                    <Text style={styles.username}>{user}</Text>
                </View>
                <View style={styles.wrapIcon}>
                    <Text style={styles.comments}>{views} views</Text>
                    <Icon name="eye" type="font-awesome" color="black" size={18} />
                </View>
            </View>
            <Image source={{ uri: previewURL }} style={styles.image} />
            <View style={styles.infoContainer}>
                <View style={styles.reactionsContainer}>

                    <View style={styles.css}>
                    <Icon name="heart" type="font-awesome" color="red" size={18} />
                    <Text style={styles.likes}>liked by {likes} people</Text>
                    </View>

                    <View style={styles.css}>
                    <Icon name="comment" type="font-awesome" color="black" size={18} />
                    <Text style={styles.comments}>{comments} comments</Text>
                    </View>

                </View>

                <View style={styles.downloads}>
                    <Text style={styles.comments}>{downloads} downloads</Text>
                    <Icon name="download" type="font-awesome" color="black" size={18} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    css: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        borderTop: 1,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 480
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
       
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 10,
        padding: 15,
        justifyContent: 'space-between'

    },
    username: {
        fontWeight: 'bold',
        marginLeft: 15,
    },
    wrapIcon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reactionsContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: 5,
        flexDirection: 'column',
    },
    likes: {
        marginLeft: 5,
        alignItems: 'center',
        marginRight: 15,
    },
    comments: {
        marginLeft: 5,
        alignItems: 'center',
        marginRight: 15
    },
    downloads: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    }
});

export default ImageItem;